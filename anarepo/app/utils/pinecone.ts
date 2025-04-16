import { Pinecone } from '@pinecone-database/pinecone';

interface MemoryContext {
  stars: number;
  forks: number;
  language: string;
  topics: string[];
}

interface MemoryMetadata {
  text: string;
  type: 'chat' | 'repository';
  timestamp: number;
  repoUrl?: string;
  context?: MemoryContext;
}

type RecordValue = string | number | boolean | string[];

interface PineconeMetadata {
  [key: string]: RecordValue;
  text: string;
  type: string;
  timestamp: number;
}

type PineconeMatch = {
  metadata?: PineconeMetadata;
};

let pineconeClient: Pinecone | null = null;

async function initPinecone() {
  if (!pineconeClient) {
    pineconeClient = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY || ''
    });
  }
  return pineconeClient;
}

const INDEX_NAME = 'rapy-chat-memory';

export async function initializeIndex() {
  try {
    const pc = await initPinecone();
    const indexes = await pc.listIndexes();
    const existingIndexes = Array.isArray(indexes) ? indexes : [];
    
    if (!existingIndexes.some((index: string) => index === INDEX_NAME)) {
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

export async function storeMemory(
  text: string,
  metadata: MemoryMetadata
) {
  const pc = await initPinecone();
  const index = pc.Index(INDEX_NAME);
  
  // For demonstration, we're using a simple hash as vector
  // In production, you should use proper text embeddings
  const vector = Array(768).fill(0).map(() => Math.random());
  
  const memoryMetadata: Record<string, RecordValue> = {
    text,
    type: metadata.type,
    timestamp: metadata.timestamp,
    ...(metadata.repoUrl ? { repoUrl: metadata.repoUrl } : {}),
    ...(metadata.context ? {
      stars: metadata.context.stars.toString(),
      forks: metadata.context.forks.toString(),
      language: metadata.context.language,
      topics: metadata.context.topics
    } : {})
  };

  await index.upsert([{
    id: `mem_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    values: vector,
    metadata: memoryMetadata
  }]);
}

export async function queryMemory(query: string, repoUrl?: string) {
  const pc = await initPinecone();
  const index = pc.Index(INDEX_NAME);
  
  // For demonstration, using random vector
  // In production, generate proper query embeddings
  const queryVector = Array(768).fill(0).map(() => Math.random());
  
  const queryResponse = await index.query({
    vector: queryVector,
    filter: repoUrl ? { repoUrl } : undefined,
    topK: 5,
    includeMetadata: true
  });

  return queryResponse.matches?.map(match => {
    if (!match.metadata) return null;
    
    const metadata: MemoryMetadata = {
      text: match.metadata.text.toString(),
      type: match.metadata.type.toString() as 'chat' | 'repository',
      timestamp: parseInt(match.metadata.timestamp.toString(), 10),
      ...(match.metadata.repoUrl ? { repoUrl: match.metadata.repoUrl.toString() } : {})
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
  }).filter((item): item is MemoryMetadata => item !== null) || [];
}
