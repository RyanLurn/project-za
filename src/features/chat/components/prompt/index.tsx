import { type FormEvent } from "react";
import { PromptEditor } from "@/features/chat/components/prompt/editor";
import { SendButton } from "@/features/chat/components/prompt/send-button";
import { CHAT_CONTAINER_WIDTH } from "@/features/chat/utils/constants";
import { cn } from "@/lib/utils";

function Prompt({
  className,
  handleSubmit,
  prompt,
  changePrompt,
  isDisabled
}: {
  className?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  prompt: string;
  changePrompt: (prompt: string) => void;
  isDisabled: boolean;
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex overflow-hidden rounded-xl border bg-background shadow-sm",
        CHAT_CONTAINER_WIDTH,
        className
      )}
    >
      <PromptEditor
        prompt={prompt}
        changePrompt={changePrompt}
        isDisabled={isDisabled}
      />
      <SendButton isDisabled={isDisabled} />
    </form>
  );
}

export { Prompt };
