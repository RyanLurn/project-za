import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/utils/mode-toggle";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => toast.info("Hello")}>Click me</Button>
      <ModeToggle className="fixed top-3 right-3" />
    </div>
  );
}

export { App };
