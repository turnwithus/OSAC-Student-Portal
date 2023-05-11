import { ProgressBar } from './progress-bar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

export const Default = () => {
  return  (
    <ProgressBar
      progress={56}
    >Default ProgressBar</ProgressBar>
  );
};
