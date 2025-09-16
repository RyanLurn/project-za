import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function ScreenLoader({
  parentName,
  isFullScreen = true
}: {
  parentName?: string;
  isFullScreen?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 bg-background",
        isFullScreen ? "h-screen w-screen" : "h-full w-full"
      )}
    >
      <Loader2 className="h-10 w-10 animate-spin text-primary sm:h-12 sm:w-12" />
      <p className="text-lg font-medium text-muted-foreground sm:text-xl">
        Loading{parentName ? " " + parentName : ""}, please wait...
      </p>
    </div>
  );
}

export { ScreenLoader };
