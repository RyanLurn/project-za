import { type FormEvent } from "react";
import { PromptEditor } from "@/features/chat/components/prompt/editor";
import { SendButton } from "@/features/chat/components/prompt/send-button";
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
        "flex w-full overflow-hidden rounded-xl border bg-background shadow-sm",
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
