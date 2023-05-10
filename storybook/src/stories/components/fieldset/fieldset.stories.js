import { Fieldset } from './fieldset';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
};

export const Default = () => {
  return  (
    <Fieldset>Default Fieldset</Fieldset>
  );
};

export const Tight = () => {
  return  (
    <Fieldset variant="tight">Default Fieldset</Fieldset>
  );
};
