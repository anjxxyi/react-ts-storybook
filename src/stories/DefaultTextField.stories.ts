import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    errorMessage: { control: "text", description: "에러 메세지" },
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 경로",
      defaultValue: "",
    },
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      defaultValue: "icon",
    },
    id: {
      control: "text",
      description: "텍스트 필드의 ID",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
      defaultValue: "텍스트를 입력해 주세요.",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
    onIconClick: {
      action: "clicked",
      description: "아이콘 이미지의 클릭 이벤트",
    },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "/icons/ic-delete-dark.svg",
    id: "email",
    placeholder: "텍스트를 입력해 주세요.",
    value: "",
    errorMessage: "텍스트를 확인해 주세요.",
    isError: false,
    onIconClick: () => {},
    onChange: () => {},
  },
};
