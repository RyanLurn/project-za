import { type FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { PromptEditor } from "@/features/chat/components/prompt/editor";
import { SendButton } from "@/features/chat/components/prompt/send-button";
import { createMessage } from "@/features/chat/functions/create-message";
import { useSurrealClient } from "@/hooks/use-surreal";
import { cn } from "@/lib/utils";

function Prompt({ className }: { className?: string }) {
  const queryClient = useQueryClient();
  const surrealClient = useSurrealClient();
  const [prompt, setPrompt] = useState("");
  const { mutate, isPending } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"]
      });
    },
    onError: err => {
      console.error(err);
      toast.error("Failed to send message");
    }
  });

  function changePrompt(prompt: string) {
    setPrompt(prompt);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate({
      surrealClient,
      role: "user",
      text: prompt
    });
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
        isDisabled={isPending}
      />
      <SendButton isDisabled={isPending} />
    </form>
  );
}

export { Prompt };
