import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Blocks/Button',
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
    variant: 'secondary'
  },
};
