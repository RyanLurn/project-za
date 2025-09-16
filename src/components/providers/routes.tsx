import { useEffect } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ScreenLoader } from "@/components/utils/screen-loader";
import { useSurrealContext } from "@/hooks/use-surreal";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({
  routeTree,
  context: {
    surrealClient: undefined! // We'll set this in React-land
  }
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function RoutesProvider() {
  const { client, isConnecting, isSuccess, isError, error, connect } =
    useSurrealContext();

  useEffect(() => {
    if (isSuccess) {
      // Example: run a query once the connection is successful
      client
        .query("SELECT * FROM users")
        .then(console.log)
        .catch(console.error);
    }
  }, [isSuccess, client]);

  if (isConnecting) return <ScreenLoader parentName="your data" />;
  if (isError)
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <p>Failed to connect to SurrealDB</p>
        <p>Error: {String(error)}</p>
        <Button onClick={connect}>Retry</Button>
      </div>
    );

  return <RouterProvider router={router} context={{ surrealClient: client }} />;
}

export { RoutesProvider };
