import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { InputRadio } from '../../blocks/input-radio/input-radio';
import { ProgressBar } from '../progress-bar/progress-bar';

export default {
  title: 'Forms/Work Status',
};

export const WorkStatus = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    console.log('Saving your updates.');
  }

  return  (
    <Accordion
      id="workstatus231"
      label="Work Status"
    >
      <Form>
        <Fieldset
          labelText="Are you working 20+ Hours/Week in the current 2022-2023 Academic Year?"
        >
          <InputRadio
            label="Yes"
            name="working"
            id="working20yes"
            value="yes" 
          />
          <InputRadio
            label="No"
            name="working"
            id="working20no"
            value="no"
            isChecked
          />
        </Fieldset>
        <Fieldset
          labelText="Are you planning to work 20+ Hours/Week in the next 2023-2024 Academic Year?"
        >
          <InputRadio
            label="Yes"
            name="workingplan"
            id="workingPlanyes"
            value="yes"
            isChecked
          />
          <InputRadio
            label="No"
            name="workingplan"
            id="workingPlanno"
            value="no"
          />
        </Fieldset>
        <ProgressBar />
        <Button onClick={SaveForm}>Save</Button>
      </Form>

    </Accordion>
  );
};
