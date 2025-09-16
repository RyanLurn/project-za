import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { PromptEditor } from "@/features/chat/components/prompt/editor";
import { SendButton } from "@/features/chat/components/prompt/send-button";

function Prompt() {
  const [prompt, setPrompt] = useState("");
  const {} = useMutation();

  function changePrompt(prompt: string) {
    setPrompt(prompt);
  }

  return (
    <form>
      <PromptEditor
        prompt={prompt}
        changePrompt={changePrompt}
        isDisabled={isDisabled}
      />
      <SendButton isDisabled={isDisabled} />
    </form>
  );
}
