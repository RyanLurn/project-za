import { createFileRoute } from "@tanstack/react-router";
import { PlayPage } from "@/features/chat/components/play-page";
import { createMessagesQueryOptions } from "@/features/chat/functions/create-messages-query-options";

export const Route = createFileRoute("/play")({
  loader: ({ context }) => {
    const { globalQueryClient, surrealClient } = context;
    console.log("surrealClient", surrealClient);
    const messagesQueryOptions = createMessagesQueryOptions(surrealClient);
    const suspensedMessages =
      globalQueryClient.ensureQueryData(messagesQueryOptions);
    return suspensedMessages;
  },
  component: PlayPage
});
