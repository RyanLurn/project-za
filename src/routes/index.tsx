import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2">
      <h1>Welcome to Project ZA</h1>
      <Button asChild>
        <Link to="/play">Play</Link>
      </Button>
    </div>
  );
}
