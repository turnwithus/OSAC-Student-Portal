import { InputCheckbox } from './input-checkbox';

export default {
  title: 'Blocks/Form controls/Checkbox',
  component: InputCheckbox,
  tags: ['autodocs'],
};

export const Default = () => {
  return  (
    <InputCheckbox 
      
    />
  );
};

export const Checked = () => {
  return  (
    <InputCheckbox isChecked />
  );
};

export const Composed = () => {
  return  (
    <>
      <InputCheckbox id="unique1" label="This child requires care" />
      <InputCheckbox id="unique2" label="This child requires extra care due to disability" />
      <InputCheckbox id="unique31" label="This checkbox is disabled" disabled />
    </>
  );
};
