import { InputRadio } from '../../blocks/input-radio/input-radio';
import { Fieldset } from './fieldset';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
};

export const Default = () => {
  return  (
    <Fieldset>

    </Fieldset>
  );
};

export const OneCol = () => {
  return  (
    <Fieldset 
      fieldsetText="In a two-column form, sometimes a 1col fieldset is required:"
      variant="1col">

    </Fieldset>
  );
};


export const Composed = () => {
  return  (
    <Fieldset 
      fieldsetText="In a two-column form, sometimes a 1col fieldset is required:"
      variant="1col">
        <InputRadio id="radio4532" label="yes" />
        <InputRadio id="radio4532" label="no" />
    </Fieldset>
  );
};
