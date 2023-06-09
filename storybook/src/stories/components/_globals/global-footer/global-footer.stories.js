import { GlobalFooter } from './global-footer';

export default {
  title: 'components/Globals/Footer',
  component: GlobalFooter,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = () => {
  return  (
    <GlobalFooter />
  );
};

export const Light = () => {
  return  (
    <GlobalFooter variant="light" />
  );
};
