import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconMail } from "@tabler/icons-react";
import type { PulsatingButtonProps } from "./types";
import { sizeClasses, radiusClasses } from "./variants";

export const PulsatingButton = ({
  children = "Invite this person",
  className,
  size = "md",
  radius = "full",
  disabled = false,
  pulseColor = "bg-gray-400/30",
  pulseCount = 3,
  pulseDuration = 1.2,
  icon: IconComponent = IconMail,
  onClick,
}: PulsatingButtonProps) => {
  const pulseDelays = Array.from(
    { length: pulseCount },
    (_, i) => i * (pulseDuration / pulseCount)
  );

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      initial="initial"
      whileHover="hover"
      className={cn(
        "relative group p-4 text-neutral-100 bg-neutral-900 dark:text-neutral-100 dark:bg-neutral-800 shadow-2xl flex items-center justify-center border border-neutral-500/10 cursor-pointer whitespace-nowrap",
        sizeClasses[size],
        radiusClasses[radius],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {pulseDelays.map((delay, index) => (
        <motion.div
          key={index}
          className={cn("absolute inset-0", radiusClasses[radius], pulseColor)}
          variants={{
            initial: { scale: 1, opacity: 0 },
            hover: { scale: 1.5, opacity: [0, 0.6, 0] },
          }}
          transition={{
            duration: pulseDuration,
            repeat: Infinity,
            ease: "easeOut",
            delay,
          }}
        />
      ))}
      <div className="flex gap-1 z-10 items-center">
        {IconComponent && <IconComponent width={16} height={16} stroke={2} />}
        <p className="text-xs font-normal">{children}</p>
      </div>
    </motion.button>
  );
};

export default PulsatingButton;