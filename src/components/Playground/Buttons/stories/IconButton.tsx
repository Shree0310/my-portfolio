import type { Meta, StoryObj } from "@storybook/react";
import { IconButton, HeartButton, TrashButton, ShareButton } from "../IconButton";
import { IconStar, IconBell, IconBookmark } from "@tabler/icons-react";

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    disabled: { control: "boolean" },
    iconStroke: { control: { type: "range", min: 1, max: 4, step: 0.5 } },
    bgColor: { control: "text" },
    hoverBgColor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: IconStar,
  },
};

export const PresetButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <HeartButton />
      <TrashButton />
      <ShareButton />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex gap-2">
      <IconButton icon={IconStar} bgColor="bg-yellow-600" hoverBgColor="hover:bg-yellow-700" />
      <IconButton icon={IconBell} bgColor="bg-violet-600" hoverBgColor="hover:bg-violet-700" />
      <IconButton icon={IconBookmark} bgColor="bg-emerald-600" hoverBgColor="hover:bg-emerald-700" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton icon={IconStar} size="sm" />
      <IconButton icon={IconStar} size="md" />
      <IconButton icon={IconStar} size="lg" />
      <IconButton icon={IconStar} size="xl" />
    </div>
  ),
};