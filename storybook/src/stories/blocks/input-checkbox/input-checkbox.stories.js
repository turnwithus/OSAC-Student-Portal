import { InputCheckbox } from './input-checkbox';

export default {
  title: 'Form controls/Checkbox',
  component: InputCheckbox,
};

export const Default = () => {
  return  (
    <InputCheckbox 
      
    />
  );
};

export const Checked = () => {
  return  (
    <InputCheckbox 
      isChecked
    />
  );
};
