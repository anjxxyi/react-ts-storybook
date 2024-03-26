import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Button/PrimaryButton",
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
      description: "Button의 테마",
      defaultValue: "dark",
    },
    children: { control: "text", description: "Button의 내용" },
    disabled: { control: "boolean", description: "Button의 비활성화 여부", defaultValue: true },

    onClick: { action: "clicked", description: "Button의 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "Button",
    theme: "dark",
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "Button",
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
    children: "Button",
    theme: "social",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "dark",
    disabled: true,
  },
};