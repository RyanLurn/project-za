import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSurrealContext } from "@/hooks/use-surreal";

export function ExampleComponent() {
  const { client, isConnecting, isSuccess, isError, error, connect } =
    useSurrealContext();
  // or if you only need the client:
  // const client = useSurrealClient();

  useEffect(() => {
    if (isSuccess) {
      // Example: run a query once the connection is successful
      client
        .query("SELECT * FROM users")
        .then(console.log)
        .catch(console.error);
    }
  }, [isSuccess, client]);

  if (isConnecting) return <p>Connecting to SurrealDB...</p>;
  if (isError) return <p>Failed to connect: {String(error)}</p>;

  return (
    <div>
      <h1>Users</h1>
      {/* Example button to manually reconnect */}
      <Button onClick={connect}>Reconnect</Button>
    </div>
  );
}
