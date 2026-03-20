import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { IconHeart, IconTrash, IconShare } from "@tabler/icons-react";
import type { IconButtonProps } from "./types";
import { iconSizeClasses, radiusClasses } from "./variants";

export const IconButton = ({
  className,
  size = "md",
  radius = "sm",
  disabled = false,
  icon: IconComponent,
  iconStroke = 2,
  bgColor = "bg-blue-600",
  hoverBgColor = "hover:bg-blue-700",
  iconColor = "text-neutral-200",
  onClick,
}: IconButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "shadow-2xl cursor-pointer",
        bgColor,
        hoverBgColor,
        iconColor,
        iconSizeClasses[size],
        radiusClasses[radius],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      <IconComponent stroke={iconStroke} />
    </Button>
  );
};

// Convenience exports for common icon buttons
export const HeartButton = (props: Omit<IconButtonProps, "icon">) => (
  <IconButton {...props} icon={IconHeart} iconStroke={3} />
);

export const TrashButton = (props: Omit<IconButtonProps, "icon">) => (
  <IconButton {...props} icon={IconTrash} iconStroke={3} />
);

export const ShareButton = (props: Omit<IconButtonProps, "icon">) => (
  <IconButton {...props} icon={IconShare} iconStroke={2} />
);

export default IconButton;