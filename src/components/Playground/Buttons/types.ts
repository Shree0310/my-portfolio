import type { Icon } from "@tabler/icons-react";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonRadius = "none" | "sm" | "md" | "lg" | "full";
export type LinkColor = "sky" | "orange" | "green" | "red" | "violet";
export type GlowColor = "indigo" | "cyan" | "violet" | "pink" | "emerald" | "orange";

export interface BaseButtonProps {
    children?: React.ReactNode,
    className?: string,
    textColor?: string,
    size?: ButtonSize,
    radius?: ButtonRadius,
    disabled?: boolean,
    onClick?: () => void
}

export interface GradientButtonProps extends BaseButtonProps {
    gradientFrom?: string,
    gradientTo?: string,
    gradientVia?: string
    hoverGradientFrom?: string,
    hoverGradientTo?: string,
    hoverGradientVia?: string
}

export interface BorderBeamButtonProps extends BaseButtonProps {
    beamDuration?: number,
    beamSize?: number,
    beamFrom?: string,
    beamTo?: string
}

export interface HoverListButtonProps extends BaseButtonProps {
    liftDistance?: number,
    duration?: number,
}

export interface SecondaryButtonProps extends BaseButtonProps {
    secBgColor?: string,
    hoverSecBgColor?: string
}

export interface DisabledButtonProps extends BaseButtonProps {

}

export interface LinkButtonProps extends BaseButtonProps {
    color?: LinkColor
}

export interface IluminoButtonProps extends BaseButtonProps {
    glowColor?: string,
    bgColor?: string,
    hoverBgColor?: string
}

export interface Animated3DButtonProps extends BaseButtonProps {
  rotateXOnHover?: number;
  rotateYOnHover?: number;
  shadowColor?: string;
  glowColor?: GlowColor;
}
 
export interface GlowingButtonProps extends BaseButtonProps {
  initialShadowColor?: string;
  hoverShadowColor?: string;
  glowColor?: string;
}
 
export interface IconButtonProps extends Omit<BaseButtonProps, "children"> {
  icon: Icon;
  iconStroke?: number;
  bgColor?: string;
  hoverBgColor?: string;
  iconColor?: string;
}
 
export interface PulsatingButtonProps extends BaseButtonProps {
  pulseColor?: string;
  pulseCount?: number;
  pulseDuration?: number;
  icon?: Icon;
}
 
export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}
 