import type { Meta, StoryObj } from "@storybook/react";
import { GradientButton } from "../GradientButton";

const meta: Meta<typeof GradientButton> = {
  title: "Buttons/GradientButton",
  component: GradientButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Button size",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "Border radius",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    gradientFrom: {
      control: "text",
      description: "Starting gradient color class (e.g., from-blue-700)",
    },
    gradientVia: {
      control: "text",
      description: "Middle gradient color class",
    },
    gradientTo: {
      control: "text",
      description: "Ending gradient color class",
    },
    hoverGradientFrom: {
      control: "text",
      description: "Hover starting gradient color class",
    },
    hoverGradientVia: {
      control: "text",
      description: "Hover middle gradient color class",
    },
    hoverGradientTo: {
      control: "text",
      description: "Hover ending gradient color class",
    },
    children: {
      control: "text",
      description: "Button label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof GradientButton>;

// Default state
export const Default: Story = {
  args: {
    children: "Click here",
    size: "md",
    radius: "full",
    disabled: false,
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <GradientButton size="sm">Small</GradientButton>
      <GradientButton size="md">Medium</GradientButton>
      <GradientButton size="lg">Large</GradientButton>
      <GradientButton size="xl">X-Large</GradientButton>
    </div>
  ),
};

// All radius options
export const Radii: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <GradientButton radius="none">None</GradientButton>
      <GradientButton radius="sm">Small</GradientButton>
      <GradientButton radius="md">Medium</GradientButton>
      <GradientButton radius="lg">Large</GradientButton>
      <GradientButton radius="full">Full</GradientButton>
    </div>
  ),
};

// Purple gradient variant
export const PurpleGradient: Story = {
  args: {
    children: "Purple",
    gradientFrom: "from-purple-700",
    gradientVia: "via-purple-600",
    gradientTo: "to-purple-700",
    hoverGradientFrom: "hover:from-purple-800",
    hoverGradientVia: "hover:via-purple-700",
    hoverGradientTo: "hover:to-purple-800",
  },
};

// Emerald gradient variant
export const EmeraldGradient: Story = {
  args: {
    children: "Emerald",
    gradientFrom: "from-emerald-700",
    gradientVia: "via-teal-600",
    gradientTo: "to-emerald-700",
    hoverGradientFrom: "hover:from-emerald-800",
    hoverGradientVia: "hover:via-teal-700",
    hoverGradientTo: "hover:to-emerald-800",
  },
};

// Pink gradient variant
export const PinkGradient: Story = {
  args: {
    children: "Pink",
    gradientFrom: "from-pink-600",
    gradientVia: "via-rose-500",
    gradientTo: "to-pink-600",
    hoverGradientFrom: "hover:from-pink-700",
    hoverGradientVia: "hover:via-rose-600",
    hoverGradientTo: "hover:to-pink-700",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

// Color palette showcase
export const ColorPalette: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <GradientButton>Blue (Default)</GradientButton>
        <GradientButton
          gradientFrom="from-purple-700"
          gradientVia="via-purple-600"
          gradientTo="to-purple-700"
        >
          Purple
        </GradientButton>
        <GradientButton
          gradientFrom="from-pink-600"
          gradientVia="via-rose-500"
          gradientTo="to-pink-600"
        >
          Pink
        </GradientButton>
      </div>
      <div className="flex items-center gap-4">
        <GradientButton
          gradientFrom="from-emerald-700"
          gradientVia="via-teal-600"
          gradientTo="to-emerald-700"
        >
          Emerald
        </GradientButton>
        <GradientButton
          gradientFrom="from-orange-600"
          gradientVia="via-amber-500"
          gradientTo="to-orange-600"
        >
          Orange
        </GradientButton>
        <GradientButton
          gradientFrom="from-cyan-600"
          gradientVia="via-sky-500"
          gradientTo="to-cyan-600"
        >
          Cyan
        </GradientButton>
      </div>
    </div>
  ),
};