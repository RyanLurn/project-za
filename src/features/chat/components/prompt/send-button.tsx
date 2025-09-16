import { Loader2Icon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function SendButton({ isDisabled }: { isDisabled: boolean }) {
  return (
    <Button
      size="icon"
      type="submit"
      className="rounded-lg"
      disabled={isDisabled}
    >
      {isDisabled ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <SendIcon className="size-4" />
      )}
    </Button>
  );
}

export { SendButton };
