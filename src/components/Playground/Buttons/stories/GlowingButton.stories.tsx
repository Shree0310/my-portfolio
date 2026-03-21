import type { Meta, StoryObj } from "@storybook/react";
import { GlowingButton } from "../GlowingButton";

const meta: Meta<typeof GlowingButton> = {
  title: "Buttons/GlowingButton",
  component: GlowingButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    disabled: { control: "boolean" },
    initialShadowColor: { control: "color" },
    hoverShadowColor: { control: "color" },
    glowColor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof GlowingButton>;

export const Default: Story = {
  args: {
    children: "Join",
  },
};

export const PinkGlow: Story = {
  args: {
    children: "Subscribe",
    initialShadowColor: "#ec4899",
    hoverShadowColor: "#db2777",
    glowColor: "pink-500",
  },
};

export const EmeraldGlow: Story = {
  args: {
    children: "Submit",
    initialShadowColor: "#10b981",
    hoverShadowColor: "#059669",
    glowColor: "emerald-500",
  },
};