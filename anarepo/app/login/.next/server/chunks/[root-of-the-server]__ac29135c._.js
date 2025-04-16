module.exports = {

"[project]/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/utils/github.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "analyzeRepository": (()=>analyzeRepository)
});
async function analyzeRepository(owner, repo) {
    const headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    };
    try {
        // Get repository info
        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers
        });
        if (!repoResponse.ok) {
            throw new Error(`Failed to fetch repository: ${repoResponse.statusText}`);
        }
        const repoData = await repoResponse.json();
        // Validate repository data
        if (!repoData || !repoData.name) {
            throw new Error('Invalid repository data received');
        }
        // Get recent commits with pagination
        const commitsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`, {
            headers
        });
        if (!commitsResponse.ok) {
            throw new Error(`Failed to fetch commits: ${commitsResponse.statusText}`);
        }
        const commitsData = await commitsResponse.json();
        if (!Array.isArray(commitsData)) {
            throw new Error('Invalid commits data received');
        }
        // Get issues with error handling
        const issuesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=100`, {
            headers
        });
        if (!issuesResponse.ok) {
            throw new Error(`Failed to fetch issues: ${issuesResponse.statusText}`);
        }
        const issuesData = await issuesResponse.json();
        if (!Array.isArray(issuesData)) {
            throw new Error('Invalid issues data received');
        }
        // Get contributors with validation
        const contributorsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`, {
            headers
        });
        if (!contributorsResponse.ok) {
            throw new Error(`Failed to fetch contributors: ${contributorsResponse.statusText}`);
        }
        const contributorsData = await contributorsResponse.json();
        if (!Array.isArray(contributorsData)) {
            throw new Error('Invalid contributors data received');
        }
        // Get languages with type checking
        const languagesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, {
            headers
        });
        if (!languagesResponse.ok) {
            throw new Error(`Failed to fetch languages: ${languagesResponse.statusText}`);
        }
        const languagesData = await languagesResponse.json();
        if (typeof languagesData !== 'object' || languagesData === null) {
            throw new Error('Invalid languages data received');
        }
        // Get releases with error handling
        const releasesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases?per_page=5`, {
            headers
        });
        if (!releasesResponse.ok) {
            throw new Error(`Failed to fetch releases: ${releasesResponse.statusText}`);
        }
        const releasesData = await releasesResponse.json();
        if (!Array.isArray(releasesData)) {
            throw new Error('Invalid releases data received');
        }
        // Calculate activity metrics
        const now = new Date();
        const recentCommits = commitsData.filter((commit)=>{
            const commitDate = new Date(commit.commit.author.date);
            const daysDiff = (now.getTime() - commitDate.getTime()) / (1000 * 60 * 60 * 24);
            return daysDiff <= 30; // Last 30 days
        });
        // Sort languages by usage
        const sortedLanguages = Object.entries(languagesData).sort(([, a], [, b])=>b - a).map(([name])=>name);
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
                defaultBranch: repoData.default_branch
            },
            activity: {
                totalContributors: contributorsData.length,
                recentCommits: recentCommits.length,
                commitFrequency: (recentCommits.length / 30).toFixed(2),
                issuesHealth: {
                    total: issuesData.length,
                    open: issuesData.filter((issue)=>issue.state === 'open').length,
                    closed: issuesData.filter((issue)=>issue.state === 'closed').length,
                    closeRate: issuesData.length > 0 ? (issuesData.filter((issue)=>issue.state === 'closed').length / issuesData.length * 100).toFixed(1) + '%' : '0%'
                },
                releases: releasesData.length,
                lastRelease: releasesData[0]?.published_at || null
            },
            technologies: {
                primaryLanguage: repoData.language,
                allLanguages: sortedLanguages,
                topics: repoData.topics || []
            },
            contributors: contributorsData.slice(0, 10).map((contributor)=>({
                    username: contributor.login,
                    contributions: contributor.contributions,
                    profile: `https://github.com/${contributor.login}`
                }))
        };
    } catch (error) {
        console.error('Error analyzing repository:', error);
        throw new Error('Failed to analyze repository');
    }
}
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}}),
"[project]/app/utils/openai.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateResponse": (()=>generateResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function generateResponse(message, context, chatHistory = []) {
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
${contributors.slice(0, 3).map((c)=>`- ${c.username}: ${c.contributions} contributions`).join('\n')}

User Question: ${message}

Provide a detailed analysis focusing on the specific aspects the user is asking about. Include relevant metrics and actionable insights.`;
        } else {
            prompt = message;
        }
        // Add memory context if available
        const memories = context.memories || [];
        if (memories.length > 0) {
            prompt = `Previous Relevant Context:
${memories.map((m)=>`- ${m.text}`).join('\n')}

${prompt}`;
        }
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: systemPrompt
                },
                ...chatHistory.map((msg)=>({
                        role: msg.role,
                        content: msg.content
                    })),
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.3,
            max_tokens: 2000,
            presence_penalty: 0.3,
            frequency_penalty: 0.3 // Encourage diverse language
        });
        return response.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response.';
    } catch (error) {
        console.error('Error generating response:', error);
        throw error;
    }
}
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/app/utils/pinecone.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initializeIndex": (()=>initializeIndex),
    "queryMemory": (()=>queryMemory),
    "storeMemory": (()=>storeMemory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pinecone-database/pinecone/dist/index.js [app-route] (ecmascript)");
;
let pineconeClient = null;
async function initPinecone() {
    if (!pineconeClient) {
        pineconeClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pinecone"]({
            apiKey: process.env.PINECONE_API_KEY || ''
        });
    }
    return pineconeClient;
}
const INDEX_NAME = 'rapy-chat-memory';
async function initializeIndex() {
    try {
        const pc = await initPinecone();
        const indexes = await pc.listIndexes();
        const existingIndexes = Array.isArray(indexes) ? indexes : [];
        if (!existingIndexes.some((index)=>index === INDEX_NAME)) {
            console.log('Creating new Pinecone index:', INDEX_NAME);
            await pc.createIndex({
                name: INDEX_NAME,
                spec: {
                    serverless: {
                        cloud: 'aws',
                        region: 'us-west-2'
                    }
                }
            });
            console.log('Index created successfully');
        } else {
            console.log('Index already exists:', INDEX_NAME);
        }
    } catch (error) {
        console.error('Error initializing Pinecone index:', error);
        throw error;
    }
}
async function storeMemory(text, metadata) {
    const pc = await initPinecone();
    const index = pc.Index(INDEX_NAME);
    // For demonstration, we're using a simple hash as vector
    // In production, you should use proper text embeddings
    const vector = Array(768).fill(0).map(()=>Math.random());
    const memoryMetadata = {
        text,
        type: metadata.type,
        timestamp: metadata.timestamp,
        ...metadata.repoUrl ? {
            repoUrl: metadata.repoUrl
        } : {},
        ...metadata.context ? {
            stars: metadata.context.stars.toString(),
            forks: metadata.context.forks.toString(),
            language: metadata.context.language,
            topics: metadata.context.topics
        } : {}
    };
    await index.upsert([
        {
            id: `mem_${Date.now()}_${Math.random().toString(36).slice(2)}`,
            values: vector,
            metadata: memoryMetadata
        }
    ]);
}
async function queryMemory(query, repoUrl) {
    const pc = await initPinecone();
    const index = pc.Index(INDEX_NAME);
    // For demonstration, using random vector
    // In production, generate proper query embeddings
    const queryVector = Array(768).fill(0).map(()=>Math.random());
    const queryResponse = await index.query({
        vector: queryVector,
        filter: repoUrl ? {
            repoUrl
        } : undefined,
        topK: 5,
        includeMetadata: true
    });
    return queryResponse.matches?.map((match)=>{
        if (!match.metadata) return null;
        const metadata = {
            text: match.metadata.text.toString(),
            type: match.metadata.type.toString(),
            timestamp: parseInt(match.metadata.timestamp.toString(), 10),
            ...match.metadata.repoUrl ? {
                repoUrl: match.metadata.repoUrl.toString()
            } : {}
        };
        const stars = match.metadata.stars ? parseInt(match.metadata.stars.toString(), 10) : null;
        if (stars !== null) {
            metadata.context = {
                stars,
                forks: match.metadata.forks ? parseInt(match.metadata.forks.toString(), 10) : 0,
                language: typeof match.metadata.language === 'string' ? match.metadata.language : 'unknown',
                topics: Array.isArray(match.metadata.topics) ? match.metadata.topics : []
            };
        }
        return metadata;
    }).filter((item)=>item !== null) || [];
}
}}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/github.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/pinecone.ts [app-route] (ecmascript)");
;
;
;
;
// Helper functions for repository analysis
function getActivityLevel(activity) {
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
function getCommunityLevel(repository, activity) {
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
function getDocumentationLevel(repository, technologies) {
    const hasTopics = technologies?.topics?.length > 0;
    const hasDescription = repository.description && repository.description.length > 50;
    const hasHomepage = repository.homepage;
    if (hasTopics && hasDescription && hasHomepage) {
        return 'Well Documented - Comprehensive information available';
    } else if (hasTopics && hasDescription || hasDescription && hasHomepage) {
        return 'Adequately Documented - Basic information provided';
    } else if (hasDescription || hasTopics) {
        return 'Minimally Documented - Limited information available';
    } else {
        return 'Poorly Documented - Missing crucial information';
    }
}
function getMaintenanceLevel(activity) {
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
function extractRepoInfo(url) {
    try {
        const match = url.match(/github\.com\/([\w-]+)\/([\w-]+)/);
        if (!match) return null;
        return {
            owner: match[1],
            repo: match[2]
        };
    } catch  {
        return null;
    }
}
async function POST(request) {
    try {
        // Validate request body
        const body = await request.json();
        if (!body || typeof body !== 'object') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid request body'
            }, {
                status: 400
            });
        }
        const { message, repoUrl, chatHistory } = body;
        // Validate required fields
        if (!message || typeof message !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Message is required and must be a string'
            }, {
                status: 400
            });
        }
        if (repoUrl && typeof repoUrl !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Repository URL must be a string'
            }, {
                status: 400
            });
        }
        if (!Array.isArray(chatHistory)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Chat history must be an array'
            }, {
                status: 400
            });
        }
        // Query relevant memories with error handling
        let relevantMemories = [];
        try {
            relevantMemories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryMemory"])(message, repoUrl);
        } catch (error) {
            console.error('Error querying memories:', error);
        // Continue without memories if there's an error
        }
        // Extract owner and repo from GitHub URL if provided
        let repoAnalysis = null;
        if (repoUrl) {
            const repoInfo = extractRepoInfo(repoUrl);
            if (!repoInfo) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid GitHub repository URL'
                }, {
                    status: 400
                });
            }
            try {
                repoAnalysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeRepository"])(repoInfo.owner, repoInfo.repo);
            } catch (error) {
                console.error('Error analyzing repository:', error);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to analyze repository'
                }, {
                    status: 500
                });
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
${contributors.slice(0, 5).map((c)=>`- ${c.username} (${c.contributions} contributions)`).join('\n')}

Analysis Summary:
1. Project Activity: ${getActivityLevel(activity)}
2. Community Support: ${getCommunityLevel(repository, activity)}
3. Documentation: ${getDocumentationLevel(repository, technologies)}
4. Maintenance: ${getMaintenanceLevel(activity)}`;
        }
        // Combine memories with analysis
        const contextWithMemories = `Previous relevant interactions:
${relevantMemories.map((mem)=>mem.text).join('\n')}${analysisPrompt}`;
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateResponse"])(message, {
            memories: relevantMemories,
            repoAnalysis: repoAnalysis || undefined
        }, chatHistory);
        // Store the new interaction in memory with error handling
        try {
            const memoryText = `User: ${message}\nAssistant: ${response}`;
            const memoryMetadata = {
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$pinecone$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storeMemory"])(memoryText, memoryMetadata);
        } catch (error) {
            console.error('Error storing memory:', error);
        // Continue even if memory storage fails
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            response
        });
    } catch (error) {
        console.error('Chat API error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to process chat request',
            details: errorMessage,
            timestamp: new Date().toISOString()
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ac29135c._.js.map