import { createFileRoute } from "@tanstack/react-router";
import { ExampleComponent } from "@/components/example";

export const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <ExampleComponent />
    </div>
  );
}
