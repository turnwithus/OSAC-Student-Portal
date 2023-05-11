import { Input } from '../../blocks/input/input'
import { InputRadio } from '../../blocks/input-radio/input-radio';
import { Fieldset } from './fieldset';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
};

export const Default = () => {
  return  (
    <Fieldset 
      labelText="Optional label"
      subLabelText="Optional sub-label text"
      infoText="Optional info text"
    />
  );
};

export const NoLabel = () => {
  return  (
    <Fieldset >
      <Input id="text767522" label="Label 1" />
      <Input id="text767524" label="Label 2" />
    </Fieldset>
  );
};

export const Composed = () => {
  return  (
    <Fieldset 
      labelText="Lorem Ipsum Dolor"
      subLabelText="Optional sub-label text"
      infoText="Optional info text"
    >
      <Input id="text76752" label="Label 1" />
      <Input id="text76754" label="Label 2" />
    </Fieldset>
  );
};

export const OneColumnComposed = () => {
  return  (
    <Fieldset 
      labelText="Lorem Ipsum Dolor"
      subLabelText="Optional sub-label text"
      infoText="Optional info text"
      variant="1col">
        <InputRadio id="radio4532" label="yes" />
        <InputRadio id="radio4532" label="no" />
    </Fieldset>
  );
};
