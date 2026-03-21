import type { Meta, StoryObj } from "@storybook/react";
import { IlluminoButton } from "../IlluminoButton";

const meta: Meta<typeof IlluminoButton> = {
  title: "Buttons/IlluminoButton",
  component: IlluminoButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    disabled: { control: "boolean" },
    glowColor: { control: "text" },
    bgColor: { control: "text" },
    hoverBgColor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof IlluminoButton>;

export const Default: Story = {
  args: {
    children: "Click here",
    glowColor: "cyan-500",
  },
};

export const Violet: Story = {
  args: {
    children: "Violet",
    glowColor: "violet-500",
  },
};

export const Pink: Story = {
  args: {
    children: "Pink",
    glowColor: "pink-500",
  },
};