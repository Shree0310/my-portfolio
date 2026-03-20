import { cn } from "@/lib/utils";
import { motion, easeInOut } from "framer-motion";
import type { HoverLiftButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const HoverLiftButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "sm",
  disabled = false,
  liftDistance = -20,
  duration = 0.3,
  onClick,
}: HoverLiftButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { translateY: liftDistance }}
      transition={{ duration, ease: easeInOut }}
      className={cn(
        "bg-neutral-200 text-neutral-700 shadow-2xl cursor-pointer whitespace-nowrap",
        sizeClasses[size],
        radiusClasses[radius],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export default HoverLiftButton;