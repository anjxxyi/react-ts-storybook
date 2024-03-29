import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "dark",
    },
    children: { control: "text", description: "버튼 텍스트" },
    disabled: { control: "boolean", description: "버튼 비활성화 여부", defaultValue: true },

    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "button",
    theme: "dark",
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "button",
    theme: "light",
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Social: Story = {
  args: {
    children: "button",
    theme: "social",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "button",
    theme: "text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "button",
    theme: "dark",
    disabled: true,
  },
};