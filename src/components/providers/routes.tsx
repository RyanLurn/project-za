import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ScreenLoader } from "@/components/utils/screen-loader";
import { useSurrealContext } from "@/hooks/use-surreal";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({
  routeTree,
  context: {
    // We'll set them in React-land
    globalQueryClient: undefined!,
    surrealClient: undefined!
  }
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function RoutesProvider() {
  const globalQueryClient = useQueryClient();
  const { client, isConnecting, isSuccess, isError, error, connect } =
    useSurrealContext();

  useEffect(() => {
    if (isSuccess) {
      console.log("Surreal client connected:", client);
    }
  }, [isSuccess, client]);

  if (isConnecting) return <ScreenLoader parentName="your data" />;
  if (isError)
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <p>Failed to connect to the database</p>
        <p>Error: {String(error)}</p>
        <Button onClick={connect}>Retry</Button>
      </div>
    );

  return (
    <RouterProvider
      router={router}
      context={{ globalQueryClient, surrealClient: client }}
    />
  );
}

export { RoutesProvider };
