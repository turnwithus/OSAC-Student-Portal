import { Radiocheckgroup } from './radiocheckgroup';
import { InputCheckbox } from '../../blocks/input-checkbox/input-checkbox';
import { InputRadio } from '../../blocks/input-radio/input-radio';

export default {
  title: 'Layouts/Radiocheckgroup',
  component: Radiocheckgroup,
};

export const InlineCheckboxes = () => {
  return  (
    <Radiocheckgroup>
      <InputCheckbox id="unique1" label="This child requires care" />
      <InputCheckbox id="unique2" label="This child requires extra care due to disability" />
      <InputCheckbox id="unique31" label="This checkbox is third in the list" />
    </Radiocheckgroup>
  );
};

export const InlineRadios = () => {
  return  (
    <Radiocheckgroup>
      <InputRadio id="ag15678" name="example" value="yes" label="Yes" />
      <InputRadio id="hg16789" name="example" value="no" label="No" />
      <InputRadio id="ft12314" name="example" value="not applicable" label="Not applicable" />
    </Radiocheckgroup>
  );
};
