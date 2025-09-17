import type { UIDataTypes, UIMessagePart, UITools } from "ai";

type MessageRole = "system" | "user" | "assistant";

type MessagePart = UIMessagePart<UIDataTypes, UITools>;

type Message = {
  id: string;
  role: MessageRole;
  metadata?: unknown;
  parts: Array<MessagePart>;
};

export type { Message, MessageRole, MessagePart };
