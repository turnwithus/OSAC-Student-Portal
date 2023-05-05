import { Brand } from './brand';

export default {
  title: 'Blocks/Brand',
  component: Brand,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const OSA = () => {
  return  (
    <div style={{padding: '', backgroundColor: '#222'}}>
      <Brand variant="osa" />
    </div>
  );
};

export const HECC = () => {
  return  (
    <div style={{padding: '', backgroundColor: '#222'}}>
      <Brand variant="hecc" />
    </div>
  );
};

export const HECCColor = () => {
  return  (
    <Brand variant="hecc-color" />
  );
};
