module.exports = {

"[next]/internal/font/google/geist_e531dabc.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geist_e531dabc-module__QGiZLq__className",
  "variable": "geist_e531dabc-module__QGiZLq__variable",
});
}}),
"[next]/internal/font/google/geist_e531dabc.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/geist_mono_68a01160.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geist_mono_68a01160-module__YLcDdW__className",
  "variable": "geist_mono_68a01160-module__YLcDdW__variable",
});
}}),
"[next]/internal/font/google/geist_mono_68a01160.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/app/utils/pinecone.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initializeIndex": (()=>initializeIndex),
    "queryMemory": (()=>queryMemory),
    "storeMemory": (()=>storeMemory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pinecone-database/pinecone/dist/index.js [app-rsc] (ecmascript)");
;
let pineconeClient = null;
async function initPinecone() {
    if (!pineconeClient) {
        pineconeClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pinecone"]({
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
"[project]/app/utils/init.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initializeServices": (()=>initializeServices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$pinecone$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/pinecone.ts [app-rsc] (ecmascript)");
;
async function initializeServices() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$pinecone$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeIndex"])();
        console.log('✅ Pinecone index initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize Pinecone index:', error);
    }
}
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$init$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/init.ts [app-rsc] (ecmascript)");
;
;
;
;
;
// Initialize services on the server side only
if ("TURBOPACK compile-time truthy", 1) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$init$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeServices"])().catch(console.error);
}
const metadata = {
    title: "ANAREPO - AI-Powered GitHub Repository Analysis",
    description: "Evaluate and analyze GitHub repositories with Rapy, your AI assistant for open-source intelligence."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-900",
            children: children
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__22e66477._.js.map