import { Dialog } from './dialog';

import { Button } from '../../blocks/button/button';
import { Select } from '../../blocks/select/select';
import { Fieldset } from '../fieldset/fieldset';
import { Radiocheckgroup } from '../../layouts/radiocheckgroup/radiocheckgroup';
import { InputRadio } from '../../blocks/input-radio/input-radio';
import { InputCheckbox } from '../../blocks/input-checkbox/input-checkbox';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

export const Default = () => {
  return  (
    <Dialog>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Dialog>
  );
};

export const StartsOpen = () => {
  return  (
    <Dialog 
      isOpen
    >
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Dialog>
  );
};

export const LongTitle = () => {
  return  (
    <Dialog
      dialogTitle="Long title ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    >
      <p>Short text, tho.</p>
    </Dialog>
  );
};


export const Composed = () => {
  return  (
    <Dialog
      dialogTitle="Filters"
    >
      <div className="component">
        <strong className="heading heading--h4">Category</strong>
      </div>

      <Fieldset variant="1col" className="rhythm">
        <Select id="dialogSelect1" label="Major">
          <option value="lorem ipsum">Lorem ipsum</option>
          <option value="sit amet">Sit amet</option>
          <option value="consectitur" selected>This is selected</option>
        </Select>
        <Select id="dialogSelect2" label="Membership/Employers">
          <option value="lorem ipsum">Lorem ipsum</option>
          <option value="sit amet">Sit amet</option>
          <option value="consectitur" selected>This is selected</option>
        </Select>
      </Fieldset>
      
      <div className="component">
        <strong className="heading heading--h4">Requirements</strong>
      </div>

      <Fieldset variant="1col">
        <Radiocheckgroup>
          <InputCheckbox id="unique1" label="Essay" />
          <InputCheckbox id="unique2" label="Transcripts" />
          <InputCheckbox id="unique31" label="Child Care Expenses" />
        </Radiocheckgroup>
      </Fieldset>

      <div className="component">
        <Button variant="black">Apply</Button>
        <Button variant="black-outline">Clear All</Button>
      </div>
    
    </Dialog>
  );
};
