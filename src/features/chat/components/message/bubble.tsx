import { MessageAvatar } from "@/features/chat/components/message/avatar";
import { MessageContent } from "@/features/chat/components/message/content";
import type { Message } from "@/features/chat/types";
import { cn } from "@/lib/utils";

function MessageBubble({
  className,
  message
}: {
  className?: string;
  message: Message;
}) {
  return (
    <div
      className={cn(
        "group flex w-full items-end justify-end gap-2 py-4",
        message.role === "user"
          ? "is-user"
          : "is-assistant flex-row-reverse justify-end",
        "[&>div]:max-w-[80%]",
        className
      )}
    >
      <MessageContent messageParts={message.parts} />
      <MessageAvatar role={message.role} />
    </div>
  );
}

export { MessageBubble };
