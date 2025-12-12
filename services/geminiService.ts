import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing a Senior DevOps Cloud Engineer's portfolio. 
Your persona is professional, technical, yet approachable.
You reside in a web terminal on their portfolio site.

The Engineer's Skills:
- Cloud: AWS (Advanced), Azure (Intermediate), GCP (Intermediate)
- Containers: Docker, Kubernetes (EKS, GKE)
- IaC: Terraform, Ansible, CloudFormation
- CI/CD: Jenkins, GitHub Actions, GitLab CI
- Monitoring: Prometheus, Grafana, Datadog
- Languages: Python, Go, Bash, TypeScript

Goal: Answer questions about the engineer's background, technical skills, and availability for hire. 
Keep answers concise, strictly text-based (markdown is okay), and relevant to tech.
If asked about specific projects, mention that they can be found on the 'Projects' page.
`;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Fix: Use process.env.API_KEY directly as per guidelines. 
  // Assume it is valid and configured.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = initializeChat();
  
  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    // Generator function to yield chunks of text
    async function* textGenerator() {
      for await (const chunk of resultStream) {
         const c = chunk as GenerateContentResponse;
         if (c.text) {
           yield c.text;
         }
      }
    }
    
    return textGenerator();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};