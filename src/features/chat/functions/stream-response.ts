import { streamText } from "ai";
import { convertToModelMessages } from "ai";
import type Surreal from "surrealdb";
import { createMessage } from "@/features/chat/functions/create-message";
import { listMessages } from "@/features/chat/functions/list-messages";
import { groq } from "@/lib/ai-providers";

async function streamResponse({
  surrealClient,
  updateStream,
  clearStream
}: {
  surrealClient: Surreal;
  updateStream: (newTextChunk: string) => void;
  clearStream: () => void;
}) {
  const messages = await listMessages({ surrealClient });

  const { textStream, text } = streamText({
    model: groq("meta-llama/llama-4-maverick-17b-128e-instruct"),
    messages: convertToModelMessages(messages)
  });

  for await (const textChunk of textStream) {
    updateStream(textChunk);
  }

  await createMessage({ surrealClient, role: "assistant", text: await text });
  clearStream();
}

export { streamResponse };
