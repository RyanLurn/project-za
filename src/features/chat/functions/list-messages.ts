import type Surreal from "surrealdb";
import type { Message } from "@/features/chat/types";

async function listMessages({ surrealClient }: { surrealClient: Surreal }) {
  const messages = await surrealClient.select<Message>("messages");

  return messages;
}

export { listMessages };
