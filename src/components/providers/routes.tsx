import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ScreenLoader } from "@/components/utils/screen-loader";
import { useSurrealContext } from "@/hooks/use-surreal";
import { router } from "@/lib/router";

function RoutesProvider() {
  const globalQueryClient = useQueryClient();
  const { client, isConnecting, isError, isSuccess, error, connect } =
    useSurrealContext();

  if (isConnecting) return <ScreenLoader parentName="database connection" />;
  if (isError)
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <p>Failed to connect to the database</p>
        <p>Error: {String(error)}</p>
        <Button onClick={connect}>Retry</Button>
      </div>
    );

  if (!isSuccess) return <ScreenLoader parentName="database client" />;

  return (
    <RouterProvider
      router={router}
      context={{ globalQueryClient, surrealClient: client }}
    />
  );
}

export { RoutesProvider };
