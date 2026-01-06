
import { GoogleGenAI, Type } from "@google/genai";
import { Leader, MentorResponse } from "../types.ts";

/**
 * Helper para obter a chave de API de forma segura em diferentes ambientes.
 */
function getApiKey(): string {
  try {
    // Tenta obter do process.env (Vite/Vercel)
    // @ts-ignore
    const key = process.env.API_KEY || process.env.VITE_API_KEY;
    if (key) return key;

    // Fallback para window se estiver injetado globalmente
    // @ts-ignore
    return window.process?.env?.API_KEY || "";
  } catch (e) {
    return "";
  }
}

function getAiInstance() {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("Conselho: API_KEY não configurada no ambiente.");
  }
  return new GoogleGenAI({ apiKey });
}

const cleanJsonResponse = (text: string): string => {
  return text
    .replace(/```json/gi, '')
    .replace(/```/gi, '')
    .trim();
};

export async function summarizeProblem(problem: string): Promise<string> {
  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise este problema e resuma a essência estratégica em uma frase poderosa de no máximo 12 palavras em Português do Brasil: "${problem}"`,
    });
    return (response.text || "").replace(/"/g, '').trim();
  } catch (err) {
    console.error("Erro na sumarização:", err);
    return "Análise Estratégica de Alto Nível";
  }
}

export async function generateLeaderAdvice(leader: Leader, problem: string): Promise<MentorResponse> {
  const prompt = `Você é ${leader.name} (${leader.title}). Atue rigorosamente com sua voz e filosofia.
  Desafio do Cliente: "${problem}".
  Mantenha o tom de autoridade. Responda estritamente em JSON seguindo o schema solicitado.`;

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
    console.error(`Falha no mentor ${leader.name}:`, err);
    return {
      leaderId: leader.id,
      thinking: "Minha análise está sendo processada.",
      acting: "Execute uma revisão dos seus fundamentos.",
      writing: "Mantenha a visão clara.",
      creating: "Inove na execução.",
      quoting: "A estratégia é a arte de focar.",
      reflecting: "O futuro favorece os resilientes.",
      mounting: "1. Diagnóstico, 2. Plano, 3. Ação.",
      advising: "Não hesite diante da incerteza.",
      actionPlan: "Ação imediata recomendada."
    };
  }
}
