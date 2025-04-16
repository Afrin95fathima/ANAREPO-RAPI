import { NextResponse } from 'next/server';
import { analyzeRepository } from '@/app/utils/github';
import { generateResponse, type ChatMessage } from '@/app/utils/openai';
import { queryMemory, storeMemory } from '@/app/utils/pinecone';

// Helper functions for repository analysis
function getActivityLevel(activity: any) {
  const commitFrequency = parseFloat(activity.commitFrequency) || 0;
  const hasRecentReleases = activity.releases > 0;
  const issueCloseRate = parseFloat(activity.issuesHealth.closeRate) || 0;

  if (commitFrequency > 1 && hasRecentReleases && issueCloseRate > 70) {
    return 'Very Active - Daily commits, recent releases, and high issue resolution rate';
  } else if (commitFrequency > 0.3 && issueCloseRate > 50) {
    return 'Active - Regular updates and moderate issue handling';
  } else if (commitFrequency > 0.1) {
    return 'Moderately Active - Occasional updates';
  } else {
    return 'Low Activity - Infrequent updates';
  }
}

function getCommunityLevel(repository: any, activity: any) {
  const stars = repository.stars || 0;
  const forks = repository.forks || 0;
  const contributors = activity.totalContributors || 0;

  if (stars > 1000 && forks > 100 && contributors > 10) {
    return 'Strong - Large and active community';
  } else if (stars > 100 && forks > 10 && contributors > 5) {
    return 'Growing - Moderate community engagement';
  } else if (stars > 10 && contributors > 1) {
    return 'Emerging - Small but present community';
  } else {
    return 'Limited - Small community presence';
  }
}

function getDocumentationLevel(repository: any, technologies: any) {
  const hasTopics = technologies?.topics?.length > 0;
  const hasDescription = repository.description && repository.description.length > 50;
  const hasHomepage = repository.homepage;

  if (hasTopics && hasDescription && hasHomepage) {
    return 'Well Documented - Comprehensive information available';
  } else if ((hasTopics && hasDescription) || (hasDescription && hasHomepage)) {
    return 'Adequately Documented - Basic information provided';
  } else if (hasDescription || hasTopics) {
    return 'Minimally Documented - Limited information available';
  } else {
    return 'Poorly Documented - Missing crucial information';
  }
}

function getMaintenanceLevel(activity: any) {
  const issueCloseRate = parseFloat(activity.issuesHealth.closeRate) || 0;
  const hasRecentCommits = activity.recentCommits > 0;
  const hasRecentRelease = activity.lastRelease !== null;

  if (issueCloseRate > 80 && hasRecentCommits && hasRecentRelease) {
    return 'Well Maintained - Active development and issue resolution';
  } else if (issueCloseRate > 50 && (hasRecentCommits || hasRecentRelease)) {
    return 'Maintained - Regular updates and issue handling';
  } else if (hasRecentCommits || issueCloseRate > 30) {
    return 'Partially Maintained - Occasional updates';
  } else {
    return 'Poorly Maintained - Infrequent updates and low issue resolution';
  }
}

function extractRepoInfo(url: string) {
  try {
    const match = url.match(/github\.com\/([\w-]+)\/([\w-]+)/);
    if (!match) return null;
    return { owner: match[1], repo: match[2] };
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    // Validate request body
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const { message, repoUrl, chatHistory } = body as {
      message: string;
      repoUrl?: string;
      chatHistory: ChatMessage[];
    };

    // Validate required fields
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required and must be a string' }, { status: 400 });
    }

    if (repoUrl && typeof repoUrl !== 'string') {
      return NextResponse.json({ error: 'Repository URL must be a string' }, { status: 400 });
    }

    if (!Array.isArray(chatHistory)) {
      return NextResponse.json({ error: 'Chat history must be an array' }, { status: 400 });
    }

    // Query relevant memories with error handling
    let relevantMemories: Array<{
      text: string;
      type: 'chat' | 'repository';
      timestamp: number;
      repoUrl?: string;
      context?: {
        stars?: number;
        forks?: number;
        language?: string;
        topics?: string[];
      };
    }> = [];

    try {
      relevantMemories = await queryMemory(message, repoUrl);
    } catch (error) {
      console.error('Error querying memories:', error);
      // Continue without memories if there's an error
    }

    // Extract owner and repo from GitHub URL if provided
    let repoAnalysis = null;
    if (repoUrl) {
      const repoInfo = extractRepoInfo(repoUrl);
      if (!repoInfo) {
        return NextResponse.json({ error: 'Invalid GitHub repository URL' }, { status: 400 });
      }
      
      try {
        repoAnalysis = await analyzeRepository(repoInfo.owner, repoInfo.repo);
      } catch (error) {
        console.error('Error analyzing repository:', error);
        return NextResponse.json({ error: 'Failed to analyze repository' }, { status: 500 });
      }
    }

    // Prepare a detailed analysis prompt
    let analysisPrompt = '';
    if (repoAnalysis) {
      const { repository, activity, technologies, contributors } = repoAnalysis;
      analysisPrompt = `
Repository Analysis:

1. Overview:
- Name: ${repository.name}
- Description: ${repository.description}
- Stars: ${repository.stars.toLocaleString()}
- Forks: ${repository.forks.toLocaleString()}
- Watchers: ${repository.watchers?.toLocaleString() || '0'}
- Created: ${new Date(repository.createdAt).toLocaleDateString()}
- Last Updated: ${new Date(repository.lastUpdated).toLocaleDateString()}

2. Activity & Health:
- Recent Commits (30 days): ${activity.recentCommits || 0}
- Commit Frequency: ${activity.commitFrequency || '0'} commits/day
- Total Contributors: ${activity.totalContributors}
- Issues: ${activity.issuesHealth.open} open, ${activity.issuesHealth.closed} closed
- Issue Close Rate: ${activity.issuesHealth.closeRate || '0%'}
- Latest Release: ${activity.lastRelease ? new Date(activity.lastRelease).toLocaleDateString() : 'No releases'}

3. Technology Stack:
- Primary Language: ${technologies?.primaryLanguage || repository.language}
- Languages Used: ${technologies?.allLanguages?.join(', ') || repository.language}
- Topics: ${technologies?.topics?.length ? technologies.topics.join(', ') : 'None specified'}

4. Top Contributors:
${contributors.slice(0, 5).map(c => `- ${c.username} (${c.contributions} contributions)`).join('\n')}

Analysis Summary:
1. Project Activity: ${getActivityLevel(activity)}
2. Community Support: ${getCommunityLevel(repository, activity)}
3. Documentation: ${getDocumentationLevel(repository, technologies)}
4. Maintenance: ${getMaintenanceLevel(activity)}`;
    }

    // Combine memories with analysis
    const contextWithMemories = `Previous relevant interactions:
${relevantMemories.map((mem: any) => mem.text).join('\n')}${analysisPrompt}`;

    const response = await generateResponse(
      message,
      {
        memories: relevantMemories,
        repoAnalysis: repoAnalysis || undefined
      },
      chatHistory
    );

    // Store the new interaction in memory with error handling
    try {
      const memoryText = `User: ${message}\nAssistant: ${response}`;
      const memoryMetadata: {
        text: string;
        type: 'chat' | 'repository';
        timestamp: number;
        repoUrl?: string;
        context?: {
          stars: number;
          forks: number;
          language: string;
          topics: string[];
        };
      } = {
        text: memoryText,
        type: 'chat',
        timestamp: Date.now(),
        repoUrl,
        context: repoAnalysis ? {
          stars: repoAnalysis.repository.stars,
          forks: repoAnalysis.repository.forks,
          language: repoAnalysis.repository.language,
          topics: repoAnalysis.technologies?.topics || []
        } : undefined
      };

      await storeMemory(memoryText, memoryMetadata);
    } catch (error) {
      console.error('Error storing memory:', error);
      // Continue even if memory storage fails
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to process chat request',
        details: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
