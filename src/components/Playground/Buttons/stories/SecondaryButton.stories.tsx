import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "../SecondaryButton";

const meta: Meta<typeof SecondaryButton> = {
  title: "Buttons/SecondaryButton",
  component: SecondaryButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    disabled: { control: "boolean" },
    secBgColor: { control: "text" },
    hoverSecBgColor: { control: "text" },
    textColor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: {
    children: "Click here",
  },
};

export const Slate: Story = {
  args: {
    children: "Slate",
    secBgColor: "bg-slate-600",
    hoverSecBgColor: "hover:bg-slate-800",
  },
};

export const Dark: Story = {
  args: {
    children: "Dark",
    secBgColor: "bg-neutral-900",
    hoverSecBgColor: "hover:bg-black",
  },
};