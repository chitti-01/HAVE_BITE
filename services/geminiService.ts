
import { GoogleGenAI, GenerateContentResponse, Part, Type } from "@google/genai";
import { Recipe } from "../types";

// Helper to convert File to a base64 string
const fileToGenerativePart = async (file: File): Promise<Part> => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

export const generateRecipes = async (ingredientsText: string, imageFile: File | null): Promise<Recipe[]> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const prompt = `You are Clove, an expert chef specializing in diverse Indian regional cuisines. 
    I have some ingredients. Please analyze the user-provided text and/or the uploaded image to identify all available ingredients. 
    Based on the complete list of ingredients you identify, suggest 3 to 5 distinct regional recipes (e.g., Karnataka-style, Andhra-style, Punjabi, Bengali, etc.) that can be made.
    If no ingredients are provided or they are unclear, politely state that you need ingredients to begin.
    For each recipe, provide a name, the region it's from, a short, enticing description, and a list of the key ingredients required from the provided list.
    User provided text: "${ingredientsText}"`;

    const parts: Part[] = [];
    if (imageFile) {
        const imagePart = await fileToGenerativePart(imageFile);
        parts.push(imagePart);
    }
    parts.push({ text: prompt });

    const responseSchema = {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "The official name of the recipe." },
            region: { type: Type.STRING, description: "The Indian state or region this dish is from (e.g., 'Karnataka', 'Punjab')." },
            description: { type: Type.STRING, description: "A brief, appealing description of the dish." },
            ingredients: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of the primary ingredients required for the recipe."
            },
          },
          required: ["name", "region", "description", "ingredients"]
        }
      };

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts },
        config: {
            responseMimeType: "application/json",
            responseSchema: responseSchema,
            temperature: 0.7,
        }
    });

    const jsonText = response.text.trim();
    const recipes = JSON.parse(jsonText);
    return recipes as Recipe[];

  } catch (error) {
    console.error("Error generating recipes:", error);
    throw new Error("Failed to generate recipes. The AI might be busy, or the request could not be processed. Please try again.");
  }
};
