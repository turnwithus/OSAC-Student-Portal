import { Brand } from './brand';

export default {
  title: 'Blocks/Brand',
  component: Brand,
  decorators: [
    (Story) => (
      <div style={{ padding: '1em', backgroundColor: '#1A476E', width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {};
