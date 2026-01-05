
import { GoogleGenAI, Type } from "@google/genai";
import { Leader, MentorResponse } from "../types";

// Always use { apiKey: process.env.API_KEY } for initializing GoogleGenAI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function summarizeProblem(problem: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analise este problema e resuma a essência estratégica (a dor central) em uma frase poderosa de no máximo 12 palavras. Use um tom executivo, direto e obrigatoriamente em Português do Brasil: "${problem}"`,
  });
  return (response.text || "").replace(/"/g, '').trim();
}

export async function generateLeaderAdvice(leader: Leader, problem: string): Promise<MentorResponse> {
  const prompt = `Você é ${leader.name} (${leader.title}). Atue com sua voz, termos técnicos e filosofia exata.
  
  Desafio do Cliente: "${problem}".
  
  Sua resposta deve ser dividida rigorosamente nestes pontos, SEMPRE EM PORTUGUÊS DO BRASIL:
  1. PENSAR: O modelo mental analítico que você aplicaria.
  2. AGIR: O primeiro passo tático imediato para gerar tração.
  3. ESCREVER: Um princípio imutável para a cultura do projeto.
  4. CRIAR: A oportunidade de disrupção que os outros não veem.
  5. CITAR: Uma frase sua que encapsula a solução.
  6. REFLETIR: Visão de longo prazo (10 anos) sobre este movimento.
  7. MONTAR: A estrutura lógica da solução (Passo 1, 2, 3).
  8. ACONSELHAR: Um conselho direto, franco e talvez duro.
  9. MANIFESTO E PLANO DE AÇÃO: Um guia completo estruturado assim:
     - MOVIMENTO DE CHOQUE (0-24h): Ação imediata para quebrar a inércia.
     - MANOBRA TÁTICA (14 dias): Construção da nova base de operações.
     - O MANIFESTO DE VITÓRIA: Uma declaração autoritária de visão final para inspirar a organização.

  Mantenha o tom de autoridade de ${leader.name}. Responda em JSON seguindo o schema fornecido.`;

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

  const result = JSON.parse(response.text || "{}");
  return {
    leaderId: leader.id,
    ...result
  };
}
