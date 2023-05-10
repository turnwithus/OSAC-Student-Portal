import { GlobalHeader } from './global-header';

export default {
  title: 'components/Globals/Header',
  component: GlobalHeader,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = () => {
  return  (
    <GlobalHeader />
  );
};

export const Light = () => {
  return  (
    <GlobalHeader variant="light" />
  );
};
