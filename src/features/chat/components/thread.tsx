import { useQuery } from "@tanstack/react-query";
import { listMessages } from "@/features/chat/functions/list-messages";
import { useSurrealClient } from "@/hooks/use-surreal";

function Thread() {
  const surrealClient = useSurrealClient();
  const { data, isPending, isError } = useQuery({
    queryKey: ["messages", surrealClient],
    queryFn: () => listMessages({ surrealClient })
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.map(message => (
        <div key={message.id.toString()}>
          {message.parts.map(part => {
            if (part.type === "text") {
              return part.text;
            }
          })}
        </div>
      ))}
    </div>
  );
}

export { Thread };
