import { Tooltip } from './tooltip';

export default {
  title: 'Blocks/Tooltip',
  component: Tooltip,
};

export const Default = () => {
  return  (
    <div style={{padding: '10rem'}}>
      <Tooltip>Default Tooltip</Tooltip>
    </div>
  );
};
