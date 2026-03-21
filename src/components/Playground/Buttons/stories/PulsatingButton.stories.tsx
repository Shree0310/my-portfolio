import type { Meta, StoryObj } from "@storybook/react";
import { PulsatingButton } from "../PulsatingButton";
import { IconMail, IconBell, IconUserPlus } from "@tabler/icons-react";

const meta: Meta<typeof PulsatingButton> = {
  title: "Buttons/PulsatingButton",
  component: PulsatingButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    disabled: { control: "boolean" },
    pulseCount: { control: { type: "range", min: 1, max: 5, step: 1 } },
    pulseDuration: { control: { type: "range", min: 0.5, max: 3, step: 0.1 } },
    pulseColor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PulsatingButton>;

export const Default: Story = {
  args: {
    children: "Invite this person",
    icon: IconMail,
  },
};

export const Notification: Story = {
  args: {
    children: "New notification",
    icon: IconBell,
    pulseColor: "bg-red-400/30",
  },
};

export const AddUser: Story = {
  args: {
    children: "Add friend",
    icon: IconUserPlus,
    pulseCount: 2,
    pulseDuration: 1.5,
  },
};

export const FastPulse: Story = {
  args: {
    children: "Urgent",
    pulseCount: 4,
    pulseDuration: 0.8,
  },
};