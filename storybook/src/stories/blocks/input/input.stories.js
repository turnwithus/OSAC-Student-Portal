import { Input } from './input';

export default {
  title: 'Blocks/Form controls/Input',
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
      defaultValue="1998-10-31"
    />
  );
};

export const DateTime = () => {
  return  (
    <Input 
      type="datetime-local" 
      label="Type or select a date and time" 
      defaultValue="2018-06-12T19:30"
    />
  );
};

export const Search = () => {
  return  (
    <Input 
      type="search" 
      label="Search..." 
      placeholder="Search for a grant or scholarship name"
    />
  );
};

export const File = () => {
  return  (
    <Input 
      id="inputFile1254"
      type="file"
      label="Upload file(s)"
    />
  );
};
