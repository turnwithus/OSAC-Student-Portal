import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Blocks/Form controls/Button',
  component: Button,
  tags: ['autodocs'],
  argsTypes: {
    disabled: {
      options: [true, false],
      control: {type: 'radio'}
    }
  }
};

export const Blue = () => {
  return (
    <Button variant="blue">Blue Button</Button>
  );
};

export const BlueOutline = () => {
  return (
    <Button variant="blue-outline">Blue Outline</Button>
  );
};

export const Green = () => {
  return (
    <Button variant="green">Green Button</Button>
  );
};

export const GreenOutline = () => {
  return (
    <Button variant="green-outline">Green Outline</Button>
  );
};

export const White = () => {
  return (
    <div style={{padding: '1rem', backgroundColor: '#222'}}>
      <Button variant="white">White Button</Button>
    </div>
  );
};

export const WhiteOutline = () => {
  return  (
    <div style={{padding: '1rem', backgroundColor: '#222'}}>
      <Button variant="white-outline">White Outline</Button>
    </div>
  );
};

export const Black = () => {
  return  (
    <Button variant="black">Black</Button>
  );
};

export const BlackOutline = () => {
  return  (
    <Button variant="black-outline">Black Outline</Button>
  );
};

export const Plain = () => {
  return  (
    <Button variant="plain">Change email address</Button>
  );
};

export const Close = () => {
  return  (
    <Button variant="close"><span className="sr-only">Close this dialog</span></Button>
  );
};
