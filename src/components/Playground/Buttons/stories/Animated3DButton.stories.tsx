import type { Meta, StoryObj } from "@storybook/react";
import { Animated3DButton } from "../Animated3DButton";

const meta: Meta<typeof Animated3DButton> = {
  title: "Buttons/Animated3DButton",
  component: Animated3DButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    disabled: { control: "boolean" },
    rotateXOnHover: { control: { type: "range", min: 0, max: 45, step: 5 } },
    rotateYOnHover: { control: { type: "range", min: 0, max: 45, step: 5 } },
    shadowColor: { control: "color" },
    glowColor: { control: "select", options: ["indigo", "cyan", "violet", "pink", "emerald"] },
  },
};

export default meta;
type Story = StoryObj<typeof Animated3DButton>;

export const Default: Story = {
  args: {
    children: "Animate",
    rotateXOnHover: 25,
    rotateYOnHover: 10,
  },
};

export const CyanGlow: Story = {
  args: {
    children: "Cyan",
    glowColor: "cyan",
    shadowColor: "#06b6d4",
  },
};

export const SubtleRotation: Story = {
  args: {
    children: "Subtle",
    rotateXOnHover: 10,
    rotateYOnHover: 5,
  },
};