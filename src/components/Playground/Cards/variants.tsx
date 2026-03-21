export type CardSize =  "sm" | "md" | "lg" | "xl";

export const cardSizeClasses: Record<CardSize, string> = {
    sm: "h-48 w-64",
    md: "h-60 w-80",
    lg: "h-72 w-96",
    xl: "h-96 w-[28rem]",
}

export type CardRadius = "none" | "sm" | "md" | "lg" | "xl";

export const cardRadiusClasses: Record<CardRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
}

export type CardShadow = "none" | "sm" | "md" | "lg" | "accent";
 
export const cardShadowClasses: Record<CardShadow, string> = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  accent: "shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
};

export const baseCardStyles = {
  container: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
  title: "text-sm font-semibold text-neutral-800 dark:text-neutral-300",
  description: "text-sm text-neutral-600 dark:text-neutral-400",
  subtitle: "text-sm text-neutral-500 dark:text-neutral-500",
  icon: "text-neutral-700 dark:text-neutral-400",
  hover: "hover:bg-neutral-100 dark:hover:bg-neutral-600/30",
  divider: "divide-neutral-200 dark:divide-neutral-600",
  border: "border-neutral-200 dark:border-neutral-700",
};

// ============================================
// DEFAULT BEAM COLORS
// ============================================
 
export const defaultBeamColors = {
  start: "#d4d4d4",
  mid1: "#22d3ee",
  mid2: "#a855f7",
  end: "#d4d4d4",
};