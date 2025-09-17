import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { capitalizeFirstLetter } from "@/lib/utils";

function MessageAvatar({
  role,
  name,
  src
}: {
  role: "system" | "user" | "assistant";
  name?: string;
  src?: string;
}) {
  const avatarName = name ?? capitalizeFirstLetter(role);
  return (
    <Avatar className="size-8 ring ring-border">
      <AvatarImage
        alt={`${avatarName}'s image`}
        className="mt-0 mb-0"
        src={src}
      />
      <AvatarFallback>{avatarName.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}

export { MessageAvatar };
