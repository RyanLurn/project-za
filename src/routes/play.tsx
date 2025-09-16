import { createFileRoute } from "@tanstack/react-router";
import { Prompt } from "@/features/chat/components/prompt";
import { Thread } from "@/features/chat/components/thread";

export const Route = createFileRoute("/play")({
  component: Play
});

function Play() {
  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col gap-y-3 overflow-y-auto">
      <Thread className="flex-1" />
      <Prompt className="mb-3" />
    </div>
  );
}
