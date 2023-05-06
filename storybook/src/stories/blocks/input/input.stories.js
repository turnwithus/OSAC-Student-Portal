import { Input } from './input';

export default {
  title: 'Form controls/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' }}
};

export const Text = () => {
  return  (
    <Input />
  );
};

export const TextRequired = () => {
  return  (
    <Input isRequired />
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

export const Password = () => {
  return  (
    <Input 
      type="password" 
      label="Password" 
      placeholder="Enter your password..." />
  );
};

export const Email = () => {
  return  (
    <Input 
      type="email" 
      label="Email address" 
      placeholder="Enter your email..." />
  );
};

export const Date = () => {
  return  (
    <Input 
      type="date" 
      label="Type or select a date" 
    />
  );
};

export const DateTime = () => {
  return  (
    <Input 
      type="datetime-local" 
      label="Type or select a date and time" 
    />
  );
};
