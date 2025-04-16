import { initializeIndex } from './pinecone';

export async function initializeServices() {
  try {
    await initializeIndex();
    console.log('✅ Pinecone index initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize Pinecone index:', error);
  }
}
