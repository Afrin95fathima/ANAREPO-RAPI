import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function generateResponse(
  message: string,
  context: {
    memories?: Array<{
      text: string;
      type: 'chat' | 'repository';
      timestamp: number;
      repoUrl?: string;
    }>;
    repoAnalysis?: {
      repository: {
        name: string;
        description: string;
        stars: number;
        forks: number;
        lastUpdated: string;
        language: string;
      };
      activity: {
        totalContributors: number;
        issuesHealth: {
          total: number;
          open: number;
          closed: number;
        };
      };
      contributors: Array<{
        username: string;
        contributions: number;
      }>;
    };
  },
  chatHistory: ChatMessage[] = []
) {
  try {
    // Build a structured prompt
    let systemPrompt = `You are Rapy, an AI assistant specialized in analyzing GitHub repositories and helping developers make informed decisions about open-source projects.

Your capabilities include:
1. Analyzing repository metrics and health
2. Evaluating code quality and maintenance
3. Assessing community engagement
4. Providing insights on technology stacks
5. Comparing similar repositories

When analyzing a repository, always consider:
- Activity level and maintenance status
- Community size and engagement
- Code quality and documentation
- Technology choices and best practices
- Security and stability

Provide clear, specific, and actionable insights.`;

    let prompt = '';

    if (context.repoAnalysis) {
      const { repository, activity, contributors } = context.repoAnalysis;
      prompt = `Repository Context:

1. Basic Information:
- Name: ${repository.name}
- Description: ${repository.description}
- Primary Language: ${repository.language}
- Stars: ${repository.stars}
- Forks: ${repository.forks}

2. Activity Metrics:
- Total Contributors: ${activity.totalContributors}
- Issue Health: ${activity.issuesHealth.closed} closed, ${activity.issuesHealth.open} open
- Last Updated: ${repository.lastUpdated}

3. Top Contributors:
${contributors.slice(0, 3).map(c => `- ${c.username}: ${c.contributions} contributions`).join('\n')}

User Question: ${message}

Provide a detailed analysis focusing on the specific aspects the user is asking about. Include relevant metrics and actionable insights.`;
    } else {
      prompt = message;
    }

    // Add memory context if available
    const memories = context.memories || [];
    if (memories.length > 0) {
      prompt = `Previous Relevant Context:
${memories.map(m => `- ${m.text}`).join('\n')}

${prompt}`;
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',  // Using GPT-4 for better analysis
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        ...chatHistory.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,  // Lower temperature for more focused responses
      max_tokens: 2000,  // Increased token limit for detailed responses
      presence_penalty: 0.3,  // Slight penalty to prevent repetition
      frequency_penalty: 0.3   // Encourage diverse language
    });

    return response.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response.';
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}
