import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
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
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: false,
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: false,
    },
    showTitle: {
      control: "boolean",
      description: "페이지 타이틀 표시 여부",
      defaultValue: false,
    },
    isDark: {
      control: "boolean",
      description: "다크모드 여부",
      defaultValue: false,
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: "타이틀",
    },
    onBackButtonClick: {
      control: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      control: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    isDark: false,
    title: "타이틀",
    onBackButtonClick: () => {},
    onCloseButtonClick: () => {},
  },
};
