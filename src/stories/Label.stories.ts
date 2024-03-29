import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label";

const meta = {
  title: "Text/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "라벨과 결합될 요소의 id 속성값" },
    children: { control: "text", description: "라벨 텍스트" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "email",
    children: "e-mail",
  },
};