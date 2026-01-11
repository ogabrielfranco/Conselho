import { GoogleGenAI, Type, Chat } from "@google/genai";
import { Leader, MentorResponse } from "../types.ts";

function getApiKey(): string {
  try {
    // @ts-ignore
    const key = process.env.API_KEY || process.env.VITE_API_KEY;
    if (key) return key;
    // @ts-ignore
    return window.process?.env?.API_KEY || "";
  } catch (e) {
    return "";
  }
}

function getAiInstance() {
  const apiKey = getApiKey();
  return new GoogleGenAI({ apiKey });
}

const cleanJsonResponse = (text: string): string => {
  return text
    .replace(/```json/gi, '')
    .replace(/```/gi, '')
    .trim();
};

export async function summarizeProblem(problem: string): Promise<string> {
  if (!problem) return "Mentoria Direta e Personalizada";
  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise este desafio e resuma a essência estratégica em uma frase curta de no máximo 12 palavras em PORTUGUÊS DO BRASIL: "${problem}"`,
    });
    return (response.text || "").replace(/"/g, '').trim();
  } catch (err) {
    return "Diagnóstico Estratégico de Elite";
  }
}

export async function generateLeaderAdvice(leader: Leader, problem: string): Promise<MentorResponse> {
  const prompt = `Você é ${leader.name} (${leader.title}). Atue rigorosamente com sua voz e filosofia.
  DESAFIO: "${problem}".
  RESPONDA SEMPRE EM PORTUGUÊS DO BRASIL.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            thinking: { type: Type.STRING },
            acting: { type: Type.STRING },
            writing: { type: Type.STRING },
            creating: { type: Type.STRING },
            quoting: { type: Type.STRING },
            reflecting: { type: Type.STRING },
            mounting: { type: Type.STRING },
            advising: { type: Type.STRING },
            actionPlan: { type: Type.STRING },
          },
          required: ["thinking", "acting", "writing", "creating", "quoting", "reflecting", "mounting", "advising", "actionPlan"]
        }
      }
    });

    const rawText = response.text || "{}";
    const result = JSON.parse(cleanJsonResponse(rawText));
    return { leaderId: leader.id, ...result };
  } catch (err) {
    return {
      leaderId: leader.id,
      thinking: "Minha análise está sendo processada.",
      acting: "Reavalie seus fundamentos.",
      writing: "Visão clara, execução firme.",
      creating: "Inove onde outros veem obstáculos.",
      quoting: "A estratégia é a arte de focar.",
      reflecting: "O futuro favorece os preparados.",
      mounting: "1. Diagnóstico, 2. Plano, 3. Execução.",
      advising: "Lidere com coragem.",
      actionPlan: "Ação imediata recomendada."
    };
  }
}

export function createMentorChat(leader: Leader, problemContext: string): Chat {
  const ai = getAiInstance();
  const contextText = problemContext 
    ? `O usuário já recebeu seu dossiê inicial sobre o problema: "${problemContext}".`
    : `O usuário está iniciando uma conversa direta com você agora, sem um problema pré-definido.`;

  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `Você é ${leader.name} (${leader.title}). 
      ${contextText}
      Agora você está em uma sessão de mentoria direta e privada com ele.
      
      REGRAS:
      1. Responda rigorosamente como ${leader.name}. Use seus termos, táticas e visão de mundo.
      2. Seja conciso, impactante e direto. 
      3. RESPONDA SEMPRE EM PORTUGUÊS DO BRASIL.
      4. Não quebre o personagem em hipótese alguma.
      5. Se for Robert Greene, foque nas 48 leis do poder e natureza humana. 
      6. Se for Ayrton Senna, foque em performance brasileira, foco e disciplina.
      7. Se for Lispector ou Frankl, foque em dilemas existenciais e sentido da vida.`,
    },
  });
}