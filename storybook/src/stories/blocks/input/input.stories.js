import { Input } from './input';

export default {
  title: 'Blocks/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' }}
};

export const Text = () => {
  return  (
    <Input />
  );
};

export const TextNoLabel = () => {
  return  (
    <Input 
      labelIsHidden 
      placeholder="No visible label, but it's there for screen-readers"
    />
  );
};
