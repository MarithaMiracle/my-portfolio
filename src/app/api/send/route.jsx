import OpenAI from "openai";
import { MARIBOT_SYSTEM_PROMPT } from "../../lib/marithaKnowledge";

const MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
const MAX_HISTORY = 16;

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role,
      content: m.content.trim().slice(0, 4000),
    }));
}

export async function POST(req) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        { error: "MariBot is not configured yet. Missing GROQ_API_KEY." },
        { status: 503 }
      );
    }

    // Initialize lazily so Vercel builds don't fail when env vars are absent.
    const groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }

    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
    const history = sanitizeMessages(body?.messages);

    if (!prompt) {
      return Response.json({ error: "Missing or invalid 'prompt' field" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: MODEL,
      temperature: 0.6,
      max_tokens: 700,
      messages: [
        { role: "system", content: MARIBOT_SYSTEM_PROMPT },
        ...history,
        { role: "user", content: prompt.slice(0, 4000) },
      ],
    });

    const result =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I blanked for a second — try asking that again.";

    return Response.json({ result });
  } catch (error) {
    console.error("Groq chat error:", error);
    const message =
      error?.status === 401
        ? "MariBot could not authenticate with Groq. Check GROQ_API_KEY."
        : "Failed to fetch AI response. Please try again in a moment.";
    return Response.json({ error: message }, { status: 500 });
  }
}
