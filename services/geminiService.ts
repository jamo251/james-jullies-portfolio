
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

/**
 * Initialize the Google GenAI client following SDK guidelines.
 * API key must be accessed directly from process.env.API_KEY.
 */
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Chat with the portfolio AI assistant using a chat session to maintain context.
 */
export const chatWithPortfolioAI = async (message: string, history: any[] = []) => {
  try {
    const ai = getAIClient();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    // Directly access the .text property from the response object
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently taking a break. Please check out my projects manually below!";
  }
};
