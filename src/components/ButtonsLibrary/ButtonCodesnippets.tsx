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

export const copyButtonCode = `"use client"

import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { Copy, Check } from 'lucide-react';


export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const variants ={
    hidden: {opacity: 0, scale: 0.5},
    visible: {opacity: 1, scale: 1}
  }

  const handleCopy = () => {
    // TODO: Implement copy functionality
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      aria-label='copy code snippet'
      onClick={handleCopy}
      className="px-4 py-2 rounded-lg border transition-all duration-200"
      style={{
        borderColor: 'var(--border-medium)',
        backgroundColor: 'var(--surface-subtle)',
        color: 'var(--text)',
      }}
    >
      <AnimatePresence mode='wait' initial={false}>
        {copied ? (
          <motion.span
            key="checked"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            <Check/>
          </motion.span>) :
          (<motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            <Copy/>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}`;

export const loginButtonCode = `"use client"

import { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { AnimatePresence, motion } from "framer-motion";


export default function LoginButton() {

    const ButtonCopy = {
        idle: "Send me a log in link",
        loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)"/>,
        success: "Login Link Sent"
    }

    const [buttonState, setButtonState] = useState<keyof typeof ButtonCopy>("idle");


    const handleLogin = () => {
        if(buttonState === "success") return;
        setButtonState("loading");

        setTimeout(() => {
            setButtonState("success")
        }, 2000)

        setTimeout(() => {
            setButtonState("idle")
        }, 3500)
    }

    return (
        <div className="">
            <button onClick={handleLogin} className="blue-button">
                <AnimatePresence initial={false}>
                    <motion.span
                        key={buttonState}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3}}
                        initial={{opacity: 0, y: -25}}
                        animate={{ opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 25}}>
                        {ButtonCopy[buttonState]}
                    </motion.span>
                </AnimatePresence>

            </button>
        </div>
    )
}

// Spinner.jsx
import { clsx } from "clsx";
import "./styles.css";

const bars = Array(12).fill(0);

export function Spinner({ color, size = 20 }) {
  return (
    <div
      className="wrapper"
      style={{
        ["--spinner-size"]: \`\${size}px\`,
        ["--spinner-color"]: color,
      }}
    >
      <div className="spinner">
        {bars.map((_, i) => (
          <div className="bar" key={\`spinner-bar-\${i}\`} />
        ))}
      </div>
    </div>
  );
}

// styles.css
.wrapper {
  width: var(--spinner-size);
  height: var(--spinner-size);
  display: inline-block;
}

.spinner {
  position: relative;
  width: 100%;
  height: 100%;
}

.bar {
  position: absolute;
  width: calc(var(--spinner-size) / 10);
  height: calc(var(--spinner-size) / 4);
  top: calc(50% - (var(--spinner-size) / 8));
  left: calc(50% - (var(--spinner-size) / 20));
  background: var(--spinner-color);
  border-radius: calc(var(--spinner-size) / 20);
  transform-origin: center calc(var(--spinner-size) / 2);
  animation: spinner 1.2s linear infinite;
}

.bar:nth-child(1) { transform: rotate(0deg); animation-delay: -1.2s; }
.bar:nth-child(2) { transform: rotate(30deg); animation-delay: -1.1s; }
.bar:nth-child(3) { transform: rotate(60deg); animation-delay: -1s; }
.bar:nth-child(4) { transform: rotate(90deg); animation-delay: -0.9s; }
.bar:nth-child(5) { transform: rotate(120deg); animation-delay: -0.8s; }
.bar:nth-child(6) { transform: rotate(150deg); animation-delay: -0.7s; }
.bar:nth-child(7) { transform: rotate(180deg); animation-delay: -0.6s; }
.bar:nth-child(8) { transform: rotate(210deg); animation-delay: -0.5s; }
.bar:nth-child(9) { transform: rotate(240deg); animation-delay: -0.4s; }
.bar:nth-child(10) { transform: rotate(270deg); animation-delay: -0.3s; }
.bar:nth-child(11) { transform: rotate(300deg); animation-delay: -0.2s; }
.bar:nth-child(12) { transform: rotate(330deg); animation-delay: -0.1s; }

@keyframes spinner {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}`;