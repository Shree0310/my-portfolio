import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import type { BeamCardProps, ConcentricCirclesProps } from "./types";
import { baseCardStyles, cardShadowClasses, defaultBeamColors } from "./variants";
import GlowingButton from "../Buttons/GlowingButton";

export const ConcentricCirclesBackground = ({ 
  className,
  circleCount = 4,
  baseOpacity = 0.15,
}: ConcentricCirclesProps) => {
  const circles = Array.from({ length: circleCount }, (_, i) => ({
    size: 13.5 + i * 4,
    margin: 6.75 + i * 2,
    opacity: baseOpacity - i * 0.025,
  }));

  return (
    <div className={cn(
      "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden group-hover:animate-pulse",
      className
    )}>
      <div className="absolute blur-[1px]">
        {circles.map((circle, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-neutral-300 dark:border-gray-500"
            style={{
              width: `${circle.size}rem`,
              height: `${circle.size}rem`,
              marginLeft: `-${circle.margin}rem`,
              marginTop: `-${circle.margin}rem`,
              opacity: circle.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const BeamCard = ({
  className,
  avatars = [],
  title = "Auto-join",
  description = "Let your users discover and join organizations based on their email domain.",
  buttonLabel = "Join",
  beamColors = defaultBeamColors,
  animationDuration = 4,
}: BeamCardProps) => {
  const gradientId = `beam-gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={cn(
        "group h-60 w-86 relative rounded-lg mx-4 mt-1",
        baseCardStyles.container,
        cardShadowClasses.accent,
        className
      )}
    >
      <ConcentricCirclesBackground />

      {/* Avatars */}
      {avatars.length > 0 && (
        <div className="flex justify-center gap-10 mt-8 relative z-10">
          {avatars.map((avatar, i) => (
            <div
              key={i}
              className={cn(
                "h-10 w-10 rounded-full flex justify-center items-center",
                "bg-white dark:bg-neutral-800",
                baseCardStyles.border
              )}
            >
              <Image
                src={avatar}
                alt={`Avatar ${i + 1}`}
                width={32}
                height={32}
                className="rounded-full h-8 w-8"
              />
            </div>
          ))}
        </div>
      )}

      {/* SVG Beam Lines */}
      <div className="relative w-full h-18">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 120">
          <defs>
            <motion.linearGradient
              gradientUnits="userSpaceOnUse"
              id={gradientId}
              initial={{ x1: "0%", x2: "10%" }}
              animate={{ x1: "90%", x2: "100%" }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <stop stopColor={beamColors.start} />
              <stop offset="0.33" stopColor={beamColors.mid1} />
              <stop offset="0.66" stopColor={beamColors.mid2} />
              <stop offset="1" stopColor={beamColors.end} />
            </motion.linearGradient>
          </defs>

          {/* Left vertical line */}
          <line
            x1="60" y1="0" x2="60" y2="45"
            stroke={`url(#${gradientId})`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Middle vertical line */}
          <line
            x1="200" y1="0" x2="200" y2="100"
            stroke={`url(#${gradientId})`}
            strokeWidth="3"
          />
          {/* Right vertical line */}
          <line
            x1="340" y1="0" x2="340" y2="42"
            stroke={`url(#${gradientId})`}
            strokeWidth="3"
          />
          {/* Left diagonal */}
          <line
            x1="60" y1="45" x2="200" y2="100"
            stroke={`url(#${gradientId})`}
            strokeWidth="3"
          />
          {/* Right diagonal */}
          <line
            x1="340" y1="42" x2="200" y2="100"
            stroke={`url(#${gradientId})`}
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center">
        <GlowingButton>{buttonLabel}</GlowingButton>
      </div>

      {/* Content */}
      <div className="flex flex-col px-6 py-1">
        <div className="text-xs text-neutral-700 dark:text-neutral-300 py-1">
          {title}
        </div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BeamCard;