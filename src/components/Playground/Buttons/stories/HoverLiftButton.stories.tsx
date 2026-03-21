import type { Meta, StoryObj } from "@storybook/react";
import { HoverLiftButton } from "../HoverLiftButton";

const meta: Meta<typeof HoverLiftButton> = {
  title: "Buttons/HoverLiftButton",
  component: HoverLiftButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    disabled: { control: "boolean" },
    liftDistance: { control: { type: "range", min: -50, max: 0, step: 5 } },
    duration: { control: { type: "range", min: 0.1, max: 1, step: 0.1 } },
  },
};

export default meta;
type Story = StoryObj<typeof HoverLiftButton>;

export const Default: Story = {
  args: {
    children: "Click here",
    liftDistance: -20,
    duration: 0.3,
  },
};

export const SubtleLift: Story = {
  args: {
    children: "Subtle",
    liftDistance: -8,
    duration: 0.2,
  },
};

export const BigLift: Story = {
  args: {
    children: "Big Lift",
    liftDistance: -40,
    duration: 0.4,
  },
};