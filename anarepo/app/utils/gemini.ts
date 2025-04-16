import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI: GoogleGenerativeAI;

export function initializeGemini() {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
}

interface ChatMessage {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
}

interface ChatContext {
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
}

export async function generateResponse(
  message: string,
  context: ChatContext,
  chatHistory: ChatMessage[] = []
) {
  if (!genAI) {
    initializeGemini();
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  try {
    const chat = model.startChat({
      history: chatHistory.map(msg => ({
        role: msg.role,
        parts: msg.parts.map(part => ({ text: part.text }))
      })),
      generationConfig: {
        temperature: 0.7,
      },
    });

    let prompt = message;

    if (context.repoAnalysis) {
      prompt = `Repository Analysis:\n${JSON.stringify(context.repoAnalysis, null, 2)}\n\nUser Message: ${message}`;
    }

    if (context.memories && context.memories.length > 0) {
      prompt = `Previous Context:\n${context.memories.map(m => m.text).join('\n')}\n\n${prompt}`;
    }

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate AI response');
  }
}
