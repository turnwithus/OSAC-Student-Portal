import { InputRadio } from './input-radio';

export default {
  title: 'Form controls/Radio',
  component: InputRadio,
  tags: ['autodocs'],
};

export const Default = () => {
  return  (
    <InputRadio />
  );
};

export const Composed = () => {
  return  (
    <>
      <InputRadio id="ag5678" name="example" value="yes" label="Yes" />
      <InputRadio id="hg6789" name="example" value="no" label="No" isChecked />
      <InputRadio id="ft2314" name="example" value="not applicable" label="Not applicable" />
    </>
  );
};

export const Disabled = () => {
  return  (
    <>
      <InputRadio id="ag5678" name="example" value="yes" label="Yes" disabled />
      <InputRadio id="hg6789" name="example" value="no" label="No" disabled />
      <InputRadio id="ft2314" name="example" value="not applicable" label="Not applicable" disabled />
    </>
  );
};
