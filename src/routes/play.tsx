import { createFileRoute } from "@tanstack/react-router";
import { PlayPage } from "@/features/chat/components/play-page";

export const Route = createFileRoute("/play")({
  component: PlayPage
});
