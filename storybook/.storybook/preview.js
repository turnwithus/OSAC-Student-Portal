/** @type { import('@storybook/react').Preview } */

import '../src/index.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Components', 'Forms', 'Pages', '*' ],
      }
    }
  },
};

export default preview;
