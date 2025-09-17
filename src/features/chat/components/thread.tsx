import { useQuery } from "@tanstack/react-query";
import { MessageBubble } from "@/features/chat/components/message/bubble";
import { listMessages } from "@/features/chat/functions/list-messages";
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
    <div
      className={cn("flex w-full flex-col gap-y-3 overflow-hidden", className)}
    >
      {data.map(message => (
        <MessageBubble key={message.id.toString()} message={message} />
      ))}
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
    </div>
  );
}

export { Thread };
