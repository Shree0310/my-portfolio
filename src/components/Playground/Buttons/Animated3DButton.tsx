import { cn } from "@/lib/utils";
import { motion, easeInOut } from "framer-motion";
import type { Animated3DButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const Animated3DButton = ({
  children = "Animate",
  className,
  size = "lg",
  radius = "lg",
  disabled = false,
  rotateXOnHover = 25,
  rotateYOnHover = 10,
  shadowColor = "#8b5cf6",
  glowColor = "indigo",
  onClick,
}: Animated3DButtonProps) => {
  return (
    <div className="perspective-[1000px] [transform-style:preserve-3d]">
      <motion.button
        onClick={onClick}
        disabled={disabled}
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={
          disabled
            ? {}
            : {
                rotateX: rotateXOnHover,
                rotateY: rotateYOnHover,
                boxShadow: `0px 20px 30px ${shadowColor}`,
              }
        }
        style={{ translateZ: 100 }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className={cn(
          "relative group bg-gray-800 hover:bg-gray-900 text-neutral-100 shadow-2xl flex items-center justify-center border border-neutral-400/10 cursor-pointer whitespace-nowrap",
          sizeClasses[size],
          radiusClasses[radius],
          disabled && "opacity-60 pointer-events-none",
          className
        )}
      >
        <div
          className={cn(
            "transition-colors duration-300",
            `group-hover:text-${glowColor}-400`
          )}
        >
          {children}
        </div>
        <span
          className={cn(
            "absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent to-transparent h-px w-3/4 mx-auto",
            `via-${glowColor}-600`
          )}
        />
        <span
          className={cn(
            "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-l from-transparent to-transparent h-1 w-full mx-auto blur-md",
            `via-${glowColor}-500`
          )}
        />
      </motion.button>
    </div>
  );
};

export default Animated3DButton;