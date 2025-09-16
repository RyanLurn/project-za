import { type FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { PromptEditor } from "@/features/chat/components/prompt/editor";
import { SendButton } from "@/features/chat/components/prompt/send-button";
import { createMessage } from "@/features/chat/functions/create-message";
import { generateResponse } from "@/features/chat/functions/generate-response";
import { useSurrealClient } from "@/hooks/use-surreal";
import { cn } from "@/lib/utils";

function Prompt({ className }: { className?: string }) {
  const queryClient = useQueryClient();
  const surrealClient = useSurrealClient();
  const [prompt, setPrompt] = useState("");

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

  const { mutate: getResponse, isPending: isGettingResponse } = useMutation({
    mutationFn: generateResponse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"]
      });
    },
    onError: err => {
      console.error(err);
      toast.error("Failed to generate AI response");
    }
  });

  function changePrompt(prompt: string) {
    setPrompt(prompt);
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
    getResponse({ surrealClient });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full overflow-hidden rounded-xl border bg-background shadow-sm",
        className
      )}
    >
      <PromptEditor
        prompt={prompt}
        changePrompt={changePrompt}
        isDisabled={isSendingPrompt || isGettingResponse}
      />
      <SendButton isDisabled={isSendingPrompt || isGettingResponse} />
    </form>
  );
}

export { Prompt };
