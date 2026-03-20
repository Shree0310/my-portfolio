import type { ButtonSize, ButtonRadius } from "./types";

export const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 min-w-fit text-xs px-3",
  md: "h-10 min-w-fit text-sm px-4",
  lg: "h-12 min-w-fit text-base px-5",
  xl: "h-14 min-w-fit text-lg px-6",
};

export const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

export const radiusClasses: Record<ButtonRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
}

// Gap Classes for Button Group
export const gapClasses = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-4",
};
 
//For link buttons
export const linkColorClasses = {
  sky: "text-sky-500 hover:text-sky-300",
  orange: "text-orange-400 hover:text-orange-300",
  green: "text-green-600 hover:text-green-400",
  red: "text-red-500 hover:text-red-300",
  violet: "text-violet-500 hover:text-violet-300",
};