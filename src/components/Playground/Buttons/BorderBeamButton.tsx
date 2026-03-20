import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import BorderBeam from "../../ui/BorderBeam";
import type { BorderBeamButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const BorderBeamButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "md",
  disabled = false,
  beamDuration = 4,
  beamSize = 800,
  beamColorFrom = "#8b5cf6",
  beamColorTo = "#8b5cf6",
  reverse = true,
  onClick,
}: BorderBeamButtonProps) => {
  return (
    <div className="relative">
      <BorderBeam
        duration={beamDuration}
        size={beamSize}
        reverse={reverse}
        colorFrom={beamColorFrom}
        colorTo={beamColorTo}
        className="from-transparent via-violet-500 to-transparent"
        inset="inset-0"
      />
      <Button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "dark:bg-neutral-800 bg-neutral-400 text-neutral-50 relative z-10 cursor-pointer",
          sizeClasses[size],
          radiusClasses[radius],
          disabled && "opacity-60 pointer-events-none",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
};

export default BorderBeamButton;