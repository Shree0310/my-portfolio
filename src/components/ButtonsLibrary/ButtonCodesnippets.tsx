// ============================================
// BUTTON CODE SNIPPETS FOR SHOWCASE
// ============================================

export const gradientButtonCode = `import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface GradientButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  hoverGradientFrom?: string;
  hoverGradientVia?: string;
  hoverGradientTo?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: "h-8 px-3 text-sm min-w-fit",
  md: "h-10 px-4 text-base min-w-fit",
  lg: "h-12 px-6 text-lg min-w-fit",
  xl: "h-14 px-8 text-xl min-w-fit",
};

const radiusClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const GradientButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "lg",
  disabled = false,
  gradientFrom = "from-blue-700",
  gradientVia = "via-blue-600",
  gradientTo = "to-blue-700",
  hoverGradientFrom = "hover:from-blue-800",
  hoverGradientVia = "hover:via-blue-700",
  hoverGradientTo = "hover:to-blue-800",
  onClick,
}: GradientButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-linear-to-bl text-neutral-50 shadow-2xl cursor-pointer",
        gradientFrom, gradientVia, gradientTo,
        hoverGradientFrom, hoverGradientVia, hoverGradientTo,
        sizeClasses[size],
        radiusClasses[radius],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
    </Button>
  );
};`;

export const borderBeamButtonCode = `import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface BorderBeamButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  beamDuration?: number;
  beamSize?: number;
  beamColorFrom?: string;
  beamColorTo?: string;
  reverse?: boolean;
  onClick?: () => void;
}

export const BorderBeamButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "lg",
  disabled = false,
  beamDuration = 3,
  beamSize = 100,
  beamColorFrom = "#3b82f6",
  beamColorTo = "#60a5fa",
  reverse = false,
  onClick,
}: BorderBeamButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden bg-neutral-900 text-neutral-50",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: \`conic-gradient(from 0deg, transparent, \${beamColorFrom}, \${beamColorTo}, transparent)\`,
          animation: \`spin \${beamDuration}s linear infinite \${reverse ? "reverse" : ""}\`,
        }}
      />
      <div className="absolute inset-[1px] rounded-[inherit] bg-neutral-900" />
      <span className="relative z-10">{children}</span>
    </Button>
  );
};`;

export const hoverLiftButtonCode = `import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HoverLiftButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  liftDistance?: number;
  duration?: number;
  onClick?: () => void;
}

export const HoverLiftButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "lg",
  disabled = false,
  liftDistance = -8,
  duration = 0.3,
  onClick,
}: HoverLiftButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: liftDistance }}
      transition={{ type: "spring", stiffness: 400, damping: 17, duration }}
      className={cn(
        "bg-neutral-800 text-neutral-50 px-4 py-2 rounded-lg shadow-lg cursor-pointer",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
    </motion.button>
  );
};`;

export const secondaryButtonCode = `import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface SecondaryButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

export const SecondaryButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "lg",
  disabled = false,
  bgColor = "bg-neutral-700",
  hoverBgColor = "hover:bg-neutral-800",
  textColor = "text-neutral-50",
  onClick,
}: SecondaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        bgColor, hoverBgColor, textColor,
        "px-4 py-2 rounded-lg shadow-md cursor-pointer transition-colors",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
    </Button>
  );
};`;

export const disabledButtonCode = `import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface DisabledButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "full";
}

export const DisabledButton = ({
  children = "Click here",
  className,
  size = "md",
  radius = "lg",
}: DisabledButtonProps) => {
  return (
    <Button
      disabled
      className={cn(
        "bg-neutral-400 text-neutral-200 px-4 py-2 rounded-lg",
        "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {children}
    </Button>
  );
};`;

export const linkButtonCode = `import { cn } from "@/lib/utils";

interface LinkButtonProps {
  children?: React.ReactNode;
  className?: string;
  color?: "sky" | "orange" | "green" | "red" | "violet";
  onClick?: () => void;
}

const colorClasses = {
  sky: "text-sky-600 hover:text-sky-700 dark:text-sky-400",
  orange: "text-orange-600 hover:text-orange-700 dark:text-orange-400",
  green: "text-green-600 hover:text-green-700 dark:text-green-400",
  red: "text-red-600 hover:text-red-700 dark:text-red-400",
  violet: "text-violet-600 hover:text-violet-700 dark:text-violet-400",
};

export const LinkButton = ({
  children = "Link",
  className,
  color = "sky",
  onClick,
}: LinkButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-transparent underline-offset-4 hover:underline cursor-pointer",
        colorClasses[color],
        className
      )}
    >
      {children}
    </button>
  );
};`;

export const illuminoButtonCode = `import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface IlluminoButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  glowColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  onClick?: () => void;
}

export const IlluminoButton = ({
  children = "Click here",
  className,
  size = "md",
  disabled = false,
  glowColor = "sky-500",
  bgColor = "bg-neutral-800",
  hoverBgColor = "hover:bg-neutral-700",
  onClick,
}: IlluminoButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden px-6 py-3 rounded-lg text-neutral-50",
        bgColor, hoverBgColor,
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
      <span
        className={\`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-\${glowColor} blur-sm\`}
      />
      <span
        className={\`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-\${glowColor}\`}
      />
    </Button>
  );
};`;

export const animated3DButtonCode = `import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Animated3DButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  rotateXOnHover?: number;
  rotateYOnHover?: number;
  shadowColor?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const Animated3DButton = ({
  children = "Animate",
  className,
  disabled = false,
  rotateXOnHover = 10,
  rotateYOnHover = 15,
  shadowColor = "#3b82f6",
  glowColor = "blue",
  onClick,
}: Animated3DButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        rotateX: rotateXOnHover,
        rotateY: rotateYOnHover,
        boxShadow: \`0 20px 40px \${shadowColor}40\`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "px-6 py-3 bg-neutral-900 text-neutral-50 rounded-xl cursor-pointer",
        "transform-gpu perspective-1000",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.button>
  );
};`;

export const glowingButtonCode = `import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlowingButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  initialShadowColor?: string;
  hoverShadowColor?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const GlowingButton = ({
  children = "Join",
  className,
  disabled = false,
  initialShadowColor = "#3b82f6",
  hoverShadowColor = "#2563eb",
  glowColor = "blue-500",
  onClick,
}: GlowingButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      initial={{ boxShadow: \`0 0 20px \${initialShadowColor}60\` }}
      whileHover={{ boxShadow: \`0 0 40px \${hoverShadowColor}80\` }}
      transition={{ duration: 0.3 }}
      className={cn(
        \`px-6 py-3 bg-\${glowColor} text-white rounded-lg cursor-pointer\`,
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      {children}
    </motion.button>
  );
};`;

export const pulsatingButtonCode = `import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PulsatingButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  pulseColor?: string;
  pulseCount?: number;
  pulseDuration?: number;
  onClick?: () => void;
}

export const PulsatingButton = ({
  children = "Invite this person",
  className,
  disabled = false,
  pulseColor = "bg-sky-400/30",
  pulseCount = 3,
  pulseDuration = 1,
  onClick,
}: PulsatingButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative px-6 py-3 bg-sky-600 text-white rounded-lg cursor-pointer",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
      whileHover="hover"
    >
      {children}
      {[...Array(pulseCount)].map((_, i) => (
        <motion.span
          key={i}
          className={\`absolute inset-0 rounded-lg \${pulseColor}\`}
          variants={{
            hover: {
              scale: [1, 1.5 + i * 0.2],
              opacity: [0.5, 0],
            },
          }}
          transition={{
            duration: pulseDuration,
            delay: i * 0.15,
            repeat: Infinity,
          }}
        />
      ))}
    </motion.button>
  );
};`;

export const iconButtonCode = `import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconHeart, IconTrash, IconShare, Icon } from "@tabler/icons-react";

interface IconButtonProps {
  icon: Icon;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  bgColor?: string;
  hoverBgColor?: string;
  iconColor?: string;
  iconStroke?: number;
  onClick?: () => void;
}

const iconSizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export const IconButton = ({
  icon: Icon,
  className,
  size = "md",
  disabled = false,
  bgColor = "bg-neutral-700",
  hoverBgColor = "hover:bg-neutral-800",
  iconColor = "text-neutral-50",
  iconStroke = 1.5,
  onClick,
}: IconButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-full flex items-center justify-center",
        iconSizeClasses[size],
        bgColor, hoverBgColor, iconColor,
        disabled && "opacity-60 pointer-events-none",
        className
      )}
    >
      <Icon stroke={iconStroke} size={size === "sm" ? 16 : size === "lg" ? 24 : 20} />
    </Button>
  );
};

// Pre-made variants
export const HeartButton = (props: Partial<IconButtonProps>) => (
  <IconButton icon={IconHeart} bgColor="bg-pink-600" hoverBgColor="hover:bg-pink-700" {...props} />
);

export const TrashButton = (props: Partial<IconButtonProps>) => (
  <IconButton icon={IconTrash} bgColor="bg-red-600" hoverBgColor="hover:bg-red-700" {...props} />
);

export const ShareButton = (props: Partial<IconButtonProps>) => (
  <IconButton icon={IconShare} bgColor="bg-sky-600" hoverBgColor="hover:bg-sky-700" {...props} />
);`;