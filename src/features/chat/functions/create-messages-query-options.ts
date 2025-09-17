import { queryOptions } from "@tanstack/react-query";
import type Surreal from "surrealdb";
import { listMessages } from "./list-messages";

function createMessagesQueryOptions(surrealClient: Surreal) {
  const messagesQueryOptions = queryOptions({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["messages"],
    queryFn: () => listMessages({ surrealClient })
  });

  return messagesQueryOptions;
}

export { createMessagesQueryOptions };
