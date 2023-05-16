import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';

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
          
        </Fieldset>
        <Button onClick={SaveForm}>Update</Button>
      </Form>

    </Accordion>
  );
};
