import { useContext } from "react";
import { SurrealContext } from "@/contexts/surreal";

/**
 * Access the Surreal connection state from the context.
 */
function useSurrealContext() {
  const context = useContext(SurrealContext);
  if (!context) {
    throw new Error("useSurreal must be used within a SurrealProvider");
  }
  return context;
}

/**
 * Access the Surreal client from the context.
 */
function useSurrealClient() {
  const { client } = useSurrealContext();
  return client;
}

export { useSurrealContext, useSurrealClient };
