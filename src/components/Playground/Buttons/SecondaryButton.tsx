import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { SecondaryButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const SecondaryButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "sm",
  disabled = false,
  secBgColor = "bg-neutral-700",
  hoverSecBgColor = "hover:bg-neutral-900",
  textColor = "text-neutral-50",
  onClick,
}: SecondaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "shadow-2xl cursor-pointer whitespace-nowrap",
        secBgColor,
        hoverSecBgColor,
        textColor,
        sizeClasses[size],
        radiusClasses[radius],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;