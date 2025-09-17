import type { MessagePart } from "@/features/chat/types";

function MessageContent({
  messageParts
}: {
  messageParts: Array<MessagePart>;
}) {
  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-lg px-4 py-3 text-sm text-foreground group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground">
      {messageParts.map(part => (part.type === "text" ? part.text : null))}
    </div>
  );
}

export { MessageContent };
