import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { Input } from '../../blocks/input/input';
import { ProgressBar } from '../progress-bar/progress-bar';

export default {
  title: 'Forms/Basic Info',
};

export const BasicInfo = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    console.log('Saving your updates.');
  }

  return  (
    <Accordion
      id="q78458"
      label="Basic Information"
      isRequired
    >
      <Form>
        <Fieldset>
          <Input 
            id="PI-LFN" 
            label="Legal First Name" 
            defaultValue="Ronnie"
            isRequired 
          />
          <Input 
            id="PI-LMN" 
            label="Legal Middle Name" 
            defaultValue="James" 
          />
          <Input 
            id="PI-LLN" 
            label="Legal Last Name" 
            defaultValue="Dio" 
            isRequired 
          />
          <Input 
            id="PI-LLN2" 
            label="Confirm Legal Last Name"
            isRequired
          />
        </Fieldset>
        <Fieldset>
          <Input id="PI-birth" type="date" label="Birthdate" defaultValue="1996-07-22" isRequired />
        </Fieldset>
        <Button onClick={SaveForm}>Save</Button>
        <ProgressBar progress={60} />
      </Form>

    </Accordion>
  );
};
