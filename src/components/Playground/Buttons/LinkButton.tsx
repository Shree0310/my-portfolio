import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { LinkButtonProps } from "./types";
import { linkColorClasses } from "./variants";

export const LinkButton = ({
  children = "Link",
  className,
  color = "sky",
  disabled = false,
  onClick,
}: LinkButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-semibold border-none bg-transparent hover:bg-transparent cursor-pointer",
        linkColorClasses[color],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default LinkButton;