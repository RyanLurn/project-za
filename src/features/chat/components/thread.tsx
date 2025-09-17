import { useQuery } from "@tanstack/react-query";
import { StickToBottom } from "use-stick-to-bottom";
import { MessageBubble } from "@/features/chat/components/message/bubble";
import { ScrollToBottomButton } from "@/features/chat/components/utils/scroll-to-bottom-button";
import { listMessages } from "@/features/chat/functions/list-messages";
import { CHAT_CONTAINER_WIDTH } from "@/features/chat/utils/constants";
import { useSurrealClient } from "@/hooks/use-surreal";
import { cn } from "@/lib/utils";

function Thread({ className, stream }: { className?: string; stream: string }) {
  const surrealClient = useSurrealClient();
  const { data, isPending, isError } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["messages"],
    queryFn: () => listMessages({ surrealClient })
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

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
          <MessageBubble key={message.id.toString()} message={message} />
        ))}
        {stream && (
          <MessageBubble
            message={{
              id: "stream",
              role: "assistant",
              parts: [
                {
                  type: "text",
                  text: stream
                }
              ]
            }}
          />
        )}
      </StickToBottom.Content>
      <ScrollToBottomButton />
    </StickToBottom>
  );
}

export { Thread };
