'use server'
import { GoogleGenerativeAI } from "@google/generative-ai";
export default async function GenerateStory(prompt: string) {
    const genAI = new GoogleGenerativeAI(process.env.AI_KEY||'');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text()
}