import type Surreal from "surrealdb";
import { RecordId, Uuid } from "surrealdb";
import type { Message, MessageRole } from "@/features/chat/types";

async function createMessage({
  surrealClient,
  role,
  text
}: {
  surrealClient: Surreal;
  role: MessageRole;
  text: string;
}) {
  const message = await surrealClient.create<Message, Omit<Message, "id">>(
    new RecordId("messages", Uuid.v7()),
    {
      role,
      parts: [
        {
          type: "text",
          text
        }
      ]
    }
  );

  return message;
}

export { createMessage };
