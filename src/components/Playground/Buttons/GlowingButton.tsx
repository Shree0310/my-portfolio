"use client"
import { cn } from "@/lib/utils";
import { motion, easeInOut } from "framer-motion";
import type { GlowingButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const GlowingButton = ({
  children = "Join",
  className,
  size = "sm",
  radius = "lg",
  disabled = false,
  initialShadowColor = "#67e8f9",
  hoverShadowColor = "#8b5cf6",
  glowColor = "cyan-500",
  onClick,
}: GlowingButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      initial={{ rotate: 0, boxShadow: `0px 5px 10px ${initialShadowColor}` }}
      whileHover={
        disabled ? {} : { boxShadow: `0px 10px 20px ${hoverShadowColor}` }
      }
      transition={{ duration: 0.3, ease: easeInOut }}
      className={cn(
        "relative group dark:text-neutral-100 dark:bg-neutral-800 bg-white text-neutral-800 shadow-2xl flex items-center justify-center border border-neutral-500/10 cursor-pointer whitespace-nowrap",
        sizeClasses[size],
        radiusClasses[radius],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      <div className="text-sm text-neutral-600 dark:text-neutral-200">
        {children}
      </div>
      <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-indigo-600 to-transparent h-px w-3/4 mx-auto" />
      <span
        className={cn(
          "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-l from-transparent to-transparent h-2 w-full mx-auto blur-md",
          `via-${glowColor}`
        )}
      />
    </motion.button>
  );
};

export default GlowingButton;