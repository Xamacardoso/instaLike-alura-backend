// This file is responsible for connecting with Google Generative AI

import {GoogleGenerativeAI} from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.GoogleGenerativeAI); // Instantiates Google Generative AI
const aiModel = genAi.getGenerativeModel({model: "gemini-1.5-flash"}); // Selects the AI model that will be used

// Exports the function to generate an image description using Google Generative AI
export default async function generateImgDescription(imageBuffer){
    // Define the prompt for generating the image description in Portuguese
    const prompt = "Gere uma descrição breve em Português do Brasil para a seguinte imagem"

    try {
        // Prepare the image data for the AI model
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"), // Convert the image buffer to a base64 string
                mimeType: "image/png",
            },
        }

        // Generate content using the AI model with the prompt and image data
        const res = await model.generateContent([prompt, image]);

    } catch (error) {
        // Log an error if there is an issue generating the image description
        console.error("Erro ao obter descrição da imagem: ", error.message);
        // Throw a new error to propagate the failure up the call stack
        throw new Error("Erro ao obter descrição da imagem gerada pelo Gemini!");
    }
}

