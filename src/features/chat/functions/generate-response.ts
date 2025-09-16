import { convertToModelMessages, generateText } from "ai";
import type Surreal from "surrealdb";
import { createMessage } from "@/features/chat/functions/create-message";
import { listMessages } from "@/features/chat/functions/list-messages";
import { groq } from "@/lib/ai-providers";

async function generateResponse({ surrealClient }: { surrealClient: Surreal }) {
  const messages = await listMessages({ surrealClient });

  const { text } = await generateText({
    model: groq("llama-3.1-8b-instant"),
    messages: convertToModelMessages(messages)
  });

  await createMessage({
    surrealClient,
    role: "assistant",
    text
  });
}

export { generateResponse };
