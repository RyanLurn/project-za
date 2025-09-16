import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context }) => {
    return context.surrealClient;
  }
});

function Index() {
  const surrealClient = Route.useLoaderData();

  useEffect(() => {
    console.log("Surreal client connected:", surrealClient);
  }, [surrealClient]);

  return (
    <div className="p-2">
      <h1>Welcome to Project ZA</h1>
    </div>
  );
}
