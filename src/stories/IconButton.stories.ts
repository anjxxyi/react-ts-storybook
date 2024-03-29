import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "../components/IconButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "이미지 대체 텍스트",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지 소스 URL",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "이미지 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "delete",
    iconPath: "/icons/ic-delete-dark.svg",
  },
};