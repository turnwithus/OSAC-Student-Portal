import { Textarea } from './textarea';

export default {
  title: 'Blocks/Form Controls/Textarea',
  component: Textarea,
};

export const Default = () => {
  return  (
    <Textarea />
  );
};

export const NoLabel = () => {
  return  (
    <Textarea labelIsHidden />
  );
};

export const CustomPlaceholder = () => {
  return  (
    <Textarea placeholder="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam..." />
  );
};
