import type { UIDataTypes, UIMessagePart, UITools } from "ai";

type MessageRole = "system" | "user" | "assistant";

type Message = {
  id: string;
  role: MessageRole;
  metadata?: unknown;
  parts: Array<UIMessagePart<UIDataTypes, UITools>>;
};

export type { Message, MessageRole };
