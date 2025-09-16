import type { KeyboardEvent } from "react";
import { Textarea } from "@/components/ui/textarea";

function PromptEditor({
  prompt,
  changePrompt,
  isDisabled
}: {
  prompt: string;
  changePrompt: (prompt: string) => void;
  isDisabled: boolean;
}) {
  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        return;
      }

      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  }

  return (
    <Textarea
      name="prompt"
      value={prompt}
      onChange={e => changePrompt(e.target.value)}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      className="field-sizing-content max-h-[6lh] w-full resize-none rounded-none border-none bg-transparent p-3 shadow-none ring-0 outline-none focus-visible:ring-0 dark:bg-transparent"
    />
  );
}

export { PromptEditor };
