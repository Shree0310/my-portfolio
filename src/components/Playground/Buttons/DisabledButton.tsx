import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { BaseButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const DisabledButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "sm",
}: Omit<BaseButtonProps, "disabled" | "onClick">) => {
  return (
    <Button
      disabled
      className={cn(
        "bg-neutral-700/70 opacity-60 text-neutral-50/70 pointer-events-none shadow-2xl whitespace-nowrap",
        sizeClasses[size],
        radiusClasses[radius],
        className
      )}
    >
      {children}
    </Button>
  );
};

export default DisabledButton;