import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Blocks/Button',
  component: Button,
  tags: ['autodocs'],
};


export const Blue = () => {
  return  (
    <div style={{padding: '1rem', backgroundColor: '#fff'}}>
      <Button variant="blue">Blue Button</Button>
    </div>
  );
};
export const BlueOutline = () => {
  return  (
    <div style={{padding: '1rem', backgroundColor: '#fff'}}>
      <Button variant="blue-outline">Blue Outline</Button>
    </div>
  );
};

export const Green = () => {
  return  (
    <div style={{padding: '1rem', backgroundColor: '#fff'}}>
      <Button variant="green">Green Button</Button>
    </div>
  );
};

export const GreenOutline = () => {
  return  (
    <div style={{padding: '1rem', backgroundColor: '#fff'}}>
      <Button variant="green-outline">Green Outline</Button>
    </div>
  );
};

export const White = () => {
  return  (
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
