import { MessageAvatar } from "@/features/chat/components/message/avatar";
import { MessageContent } from "@/features/chat/components/message/content";
import type { MessagePart, MessageRole } from "@/features/chat/types";
import { cn } from "@/lib/utils";

function MessageBubble({
  className,
  messageRole,
  messageParts
}: {
  className?: string;
  messageRole: MessageRole;
  messageParts: Array<MessagePart>;
}) {
  return (
    <div
      className={cn(
        "group flex w-full items-end justify-end gap-2 py-4",
        messageRole === "user"
          ? "is-user"
          : "is-assistant flex-row-reverse justify-end",
        "[&>div]:max-w-[80%]",
        className
      )}
    >
      <MessageContent messageParts={messageParts} />
      <MessageAvatar role={messageRole} />
    </div>
  );
}

export { MessageBubble };
