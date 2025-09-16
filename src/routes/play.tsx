import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/play")({
  component: Play
});

function Play() {
  return (
    <div>
      <h1>Play</h1>
    </div>
  );
}
