import { useSuspenseQuery } from "@tanstack/react-query";
import { StickToBottom } from "use-stick-to-bottom";
import { MessageBubble } from "@/features/chat/components/message/bubble";
import { ScrollToBottomButton } from "@/features/chat/components/utils/scroll-to-bottom-button";
import { createMessagesQueryOptions } from "@/features/chat/functions/create-messages-query-options";
import { CHAT_CONTAINER_WIDTH } from "@/features/chat/utils/constants";
import { useSurrealClient } from "@/hooks/use-surreal";
import { cn } from "@/lib/utils";

function Thread({ className, stream }: { className?: string; stream: string }) {
  const surrealClient = useSurrealClient();
  const { data, isError } = useSuspenseQuery(
    createMessagesQueryOptions(surrealClient)
  );

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <StickToBottom
      initial="smooth"
      resize="smooth"
      role="log"
      className={cn(
        "relative flex w-full flex-col gap-y-3 overflow-y-auto",
        className
      )}
    >
      <StickToBottom.Content
        className={cn("flex flex-col gap-4 p-4", CHAT_CONTAINER_WIDTH)}
      >
        {data.map(message => (
          <MessageBubble
            key={message.id.toString()}
            messageRole={message.role}
            messageParts={message.parts}
          />
        ))}
        {stream && (
          <MessageBubble
            messageRole="assistant"
            messageParts={[{ type: "text", text: stream }]}
          />
        )}
      </StickToBottom.Content>
      <ScrollToBottomButton />
    </StickToBottom>
  );
}

export { Thread };
