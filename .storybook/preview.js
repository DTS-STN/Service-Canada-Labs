/** @type { import('@storybook/react').Preview } */
import "../styles/globals.css";
import "../styles/forms.css";
import "../styles/menu.css";
import "./fonts.css";

const preview = {
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
