import { type FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Prompt } from "@/features/chat/components/prompt";
import { Thread } from "@/features/chat/components/thread";
import { createMessage } from "@/features/chat/functions/create-message";
import { streamResponse } from "@/features/chat/functions/stream-response";
import { useSurrealClient } from "@/hooks/use-surreal";

function PlayPage() {
  const queryClient = useQueryClient();
  const surrealClient = useSurrealClient();
  const [prompt, setPrompt] = useState("");
  const [stream, setStream] = useState("");

  const { mutate: sendPrompt, isPending: isSendingPrompt } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"]
      });
    },
    onError: err => {
      console.error(err);
      toast.error("Failed to send prompt");
    }
  });

  const { mutate: createResponse, isPending: isCreatingResponse } = useMutation(
    {
      mutationFn: streamResponse,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["messages"]
        });
      },
      onError: err => {
        console.error(err);
        toast.error("Failed to generate AI response");
      }
    }
  );

  function updateStream(newTextChunk: string) {
    setStream(prev => prev + newTextChunk);
  }

  function clearStream() {
    setStream("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const promptText = prompt.trim();
    if (promptText === "") {
      return;
    }
    setPrompt("");
    sendPrompt({
      surrealClient,
      role: "user",
      text: promptText
    });
    createResponse({ surrealClient, updateStream, clearStream });
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col gap-y-3 overflow-y-auto">
      <Thread className="flex-1" stream={stream} />
      <Prompt
        className="mb-3"
        handleSubmit={handleSubmit}
        prompt={prompt}
        changePrompt={setPrompt}
        isDisabled={isSendingPrompt || isCreatingResponse}
      />
    </div>
  );
}

export { PlayPage };
