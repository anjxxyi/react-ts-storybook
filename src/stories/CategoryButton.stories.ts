import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: "",
    },
    text: {
      control: "text",
      description: "버튼의 내용",
      defaultValue: "",
    },
    isDarked: {
      control: "boolean",
      description: "다크모드",
      defaultValue: false,
    },
    onClick: { action: "clicked", description: "버튼의 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "/icons/ic-category-dark.svg",
    isDarked: false,
    text: "Button",
  },
};
