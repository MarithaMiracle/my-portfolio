import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HUGGINGFACE_API_KEY; // Store your token securely in .env file
const client = new InferenceClient(HF_TOKEN);

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Chat completion using Hugging Face API
    const out = await client.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 512,
    });

    return new Response(
      JSON.stringify({ result: out.choices[0].message.content || "No response" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch AI response" }),
      { status: 500 }
    );
  }
}
