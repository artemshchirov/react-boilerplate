import { Avatar, AvatarImage, AvatarFallback } from "@web/components/ui/avatar";
import { cn } from "../../../shared/lib/utils";

interface Props {
  name: string;
  avatarUrl?: string;
  className?: string;
}

const getInitials = (name: string): string => {
  const splitName = name.trim().split(/\s+/);
  if (splitName.length < 2)
    return splitName[0]?.substring(0, 2).toUpperCase() || "";
  return (splitName[0][0] + splitName[1][0]).toUpperCase();
};

function AvatarComponent({ name, avatarUrl, className }: Props) {
  return (
    <Avatar
      className={cn(
        "w-[104px] h-[104px] bg-[#EEEEEE] flex items-center justify-center rounded-full overflow-hidden cursor-pointer",
        className,
      )}
    >
      <AvatarImage
        alt="User avatar"
        className="object-cover "
        src={avatarUrl}
      />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}

export default AvatarComponent;
