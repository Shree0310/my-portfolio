import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "../LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "Buttons/LinkButton",
  component: LinkButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["sky", "orange", "green", "red", "violet"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    children: "Primary",
    color: "sky",
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <LinkButton color="sky">Primary</LinkButton>
      <LinkButton color="orange">Secondary</LinkButton>
      <LinkButton color="green">Success</LinkButton>
      <LinkButton color="red">Danger</LinkButton>
      <LinkButton color="violet">Accent</LinkButton>
    </div>
  ),
};