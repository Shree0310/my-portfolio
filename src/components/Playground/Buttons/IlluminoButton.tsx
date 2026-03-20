import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { IlluminoButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const IlluminoButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "lg",
  disabled = false,
  glowColor = "cyan-500",
  bgColor = "bg-gray-600",
  hoverBgColor = "hover:bg-gray-800",
  onClick,
}: IlluminoButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group relative text-neutral-100 shadow-2xl cursor-pointer whitespace-nowrap",
        bgColor,
        hoverBgColor,
        sizeClasses[size],
        radiusClasses[radius],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent to-transparent h-px w-3/4 mx-auto",
          `via-${glowColor}`
        )}
      />
      <span
        className={cn(
          "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-r from-transparent to-transparent h-1 w-full mx-auto blur-sm",
          `via-${glowColor}`
        )}
      />
    </Button>
  );
};

export default IlluminoButton;