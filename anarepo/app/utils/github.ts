interface GitHubIssue {
  state: 'open' | 'closed';
}

interface GitHubContributor {
  login: string;
  contributions: number;
}

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  updated_at: string;
  language: string;
  topics: string[];
  default_branch: string;
  created_at: string;
  homepage: string | null;
  size: number;
  watchers_count: number;
}

export async function analyzeRepository(owner: string, repo: string) {
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
  };

  try {
    // Get repository info
    const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
    if (!repoResponse.ok) {
      throw new Error(`Failed to fetch repository: ${repoResponse.statusText}`);
    }
    const repoData = await repoResponse.json() as GitHubRepo;

    // Validate repository data
    if (!repoData || !repoData.name) {
      throw new Error('Invalid repository data received');
    }

    // Get recent commits with pagination
    const commitsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`, { headers });
    if (!commitsResponse.ok) {
      throw new Error(`Failed to fetch commits: ${commitsResponse.statusText}`);
    }
    const commitsData = await commitsResponse.json();
    if (!Array.isArray(commitsData)) {
      throw new Error('Invalid commits data received');
    }

    // Get issues with error handling
    const issuesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=100`, { headers });
    if (!issuesResponse.ok) {
      throw new Error(`Failed to fetch issues: ${issuesResponse.statusText}`);
    }
    const issuesData = await issuesResponse.json();
    if (!Array.isArray(issuesData)) {
      throw new Error('Invalid issues data received');
    }

    // Get contributors with validation
    const contributorsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`, { headers });
    if (!contributorsResponse.ok) {
      throw new Error(`Failed to fetch contributors: ${contributorsResponse.statusText}`);
    }
    const contributorsData = await contributorsResponse.json();
    if (!Array.isArray(contributorsData)) {
      throw new Error('Invalid contributors data received');
    }

    // Get languages with type checking
    const languagesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, { headers });
    if (!languagesResponse.ok) {
      throw new Error(`Failed to fetch languages: ${languagesResponse.statusText}`);
    }
    const languagesData = await languagesResponse.json();
    if (typeof languagesData !== 'object' || languagesData === null) {
      throw new Error('Invalid languages data received');
    }

    // Get releases with error handling
    const releasesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases?per_page=5`, { headers });
    if (!releasesResponse.ok) {
      throw new Error(`Failed to fetch releases: ${releasesResponse.statusText}`);
    }
    const releasesData = await releasesResponse.json();
    if (!Array.isArray(releasesData)) {
      throw new Error('Invalid releases data received');
    }

    // Calculate activity metrics
    const now = new Date();
    const recentCommits = commitsData.filter((commit: any) => {
      const commitDate = new Date(commit.commit.author.date);
      const daysDiff = (now.getTime() - commitDate.getTime()) / (1000 * 60 * 60 * 24);
      return daysDiff <= 30; // Last 30 days
    });

    // Sort languages by usage
    const sortedLanguages = Object.entries(languagesData)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .map(([name]) => name);

    return {
      repository: {
        name: repoData.name,
        description: repoData.description || 'No description available',
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        watchers: repoData.watchers_count,
        openIssues: repoData.open_issues_count,
        lastUpdated: repoData.updated_at,
        createdAt: repoData.created_at,
        language: repoData.language || 'Not specified',
        topics: repoData.topics || [],
        homepage: repoData.homepage,
        size: repoData.size,
        defaultBranch: repoData.default_branch,
      },
      activity: {
        totalContributors: contributorsData.length,
        recentCommits: recentCommits.length,
        commitFrequency: (recentCommits.length / 30).toFixed(2), // Commits per day
        issuesHealth: {
          total: issuesData.length,
          open: issuesData.filter(issue => issue.state === 'open').length,
          closed: issuesData.filter(issue => issue.state === 'closed').length,
          closeRate: issuesData.length > 0 ? 
            (issuesData.filter(issue => issue.state === 'closed').length / issuesData.length * 100).toFixed(1) + '%' : '0%',
        },
        releases: releasesData.length,
        lastRelease: releasesData[0]?.published_at || null,
      },
      technologies: {
        primaryLanguage: repoData.language,
        allLanguages: sortedLanguages,
        topics: repoData.topics || [],
      },
      contributors: contributorsData.slice(0, 10).map(contributor => ({
        username: contributor.login,
        contributions: contributor.contributions,
        profile: `https://github.com/${contributor.login}`,
      })),
    };
  } catch (error) {
    console.error('Error analyzing repository:', error);
    throw new Error('Failed to analyze repository');
  }
}
