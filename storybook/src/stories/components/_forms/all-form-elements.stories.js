import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';

export default {
  title: 'Forms/All Form Elements',
};

export const AllFormElements = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    console.log('Saving your updates.');
  }

  return  (
    <Accordion
      id="example-form"
      label="All Form Elements"
      isRequired
    >
      <Form>
        <Fieldset>
          
        </Fieldset>
        <Button onClick={SaveForm}>Save</Button>
      </Form>

    </Accordion>
  );
};
