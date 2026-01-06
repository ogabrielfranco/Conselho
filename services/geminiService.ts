import { GoogleGenAI, Type } from "@google/genai";
import { Leader, MentorResponse } from "../types.ts";

// Inicialização segura para ambiente de produção (Vercel)
// Assume-se que process.env.API_KEY está configurado no painel do Vercel
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Limpa blocos de código Markdown e caracteres invisíveis para garantir um JSON válido
 */
const cleanJsonResponse = (text: string): string => {
  return text
    .replace(/```json/gi, '')
    .replace(/```/gi, '')
    .trim();
};

export async function summarizeProblem(problem: string): Promise<string> {
  try {
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
  const prompt = `Você é ${leader.name} (${leader.title}). Atue rigorosamente com sua voz, termos técnicos e filosofia.
  
  Desafio do Cliente: "${problem}".
  
  Sua resposta deve ser dividida nestes pontos, SEMPRE EM PORTUGUÊS DO BRASIL:
  1. PENSAR: Seu modelo mental analítico.
  2. AGIR: O primeiro passo tático imediato.
  3. ESCREVER: Um princípio imutável para a cultura.
  4. CRIAR: A oportunidade de disrupção oculta.
  5. CITAR: Uma frase sua que encapsula a solução.
  6. REFLETIR: Visão de longo prazo (10 anos).
  7. MONTAR: Estrutura lógica (Passo 1, 2, 3).
  8. ACONSELHAR: Um conselho direto e franco.
  9. MANIFESTO E PLANO DE AÇÃO: Guia completo com MOVIMENTO DE CHOQUE (0-24h), MANOBRA TÁTICA (14 dias) e O MANIFESTO DE VITÓRIA.

  Responda estritamente em JSON usando este schema:`;

  try {
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
    const cleanedText = cleanJsonResponse(rawText);
    const result = JSON.parse(cleanedText);
    
    return {
      leaderId: leader.id,
      ...result
    };
  } catch (err) {
    console.error(`Falha ao processar mentor ${leader.name}:`, err);
    // Fallback de contingência para não interromper a experiência do usuário
    return {
      leaderId: leader.id,
      thinking: "Análise estratégica em processamento profundo.",
      acting: "Execute uma auditoria imediata dos seus recursos críticos.",
      writing: "A disciplina é a alma da vitória.",
      creating: "Busque a vantagem competitiva no ponto de menor resistência.",
      quoting: "A vitória favorece os preparados.",
      reflecting: "Este movimento definirá sua posição no mercado na próxima década.",
      mounting: "1. Diagnóstico, 2. Estratégia, 3. Execução.",
      advising: "Não hesite. A hesitação é o primeiro passo para a derrota.",
      actionPlan: "Ação de choque recomendada para as próximas 24 horas."
    };
  }
}