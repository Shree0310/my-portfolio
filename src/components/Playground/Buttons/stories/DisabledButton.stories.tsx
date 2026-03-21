import type { Meta, StoryObj } from "@storybook/react";
import { DisabledButton } from "../DisabledButton";

const meta: Meta<typeof DisabledButton> = {
  title: "Buttons/DisabledButton",
  component: DisabledButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
  },
};

export default meta;
type Story = StoryObj<typeof DisabledButton>;

export const Default: Story = {
  args: {
    children: "Click here",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <DisabledButton size="sm">Small</DisabledButton>
      <DisabledButton size="md">Medium</DisabledButton>
      <DisabledButton size="lg">Large</DisabledButton>
      <DisabledButton size="xl">X-Large</DisabledButton>
    </div>
  ),
};