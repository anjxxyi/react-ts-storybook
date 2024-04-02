import type { Preview } from "@storybook/react";
import "@fontsource/noto-sans-kr"; // Defaults to weight 400
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'dark',
          value: '#2d2d2d',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
};

export default preview;
