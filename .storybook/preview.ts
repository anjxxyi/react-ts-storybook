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
  },
};

export default preview;
