import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { Textarea } from '../../blocks/textarea/textarea';

export default {
  title: 'Example Forms/Personal Statements',
};

export const PersonalStatements = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    console.log('Saving your updates.');
  }

  return  (
    <Accordion
      id="personalStatements"
      label="Personal Statements"
      isRequired
    >
      <Form>
        <Fieldset
          variant="1col"
          labelText="Personal Statement Questions"
          infoText="Note*: We recommend you fill in these questions within a Word document first before copy and pasting here."
        >
          <Fieldset variant="1col">
            <Textarea
              id="pi01"
              label="What are your specific educational plans and career goals and why? What motivates you to achieve them?"
              isRequired />
          </Fieldset>

          <Fieldset variant="1col">
            <Textarea
              id="pi02"
              label="What have you done for your family, school, or community that you care about the most and why?"
              isRequired />
          </Fieldset>

          <Fieldset variant="1col">
            <Textarea
              id="pi03"
              label="Is there any additional information you would like the selection committee members to know? This could include financial situations not reflected on the FAFSA or ORSAA or other information not covered in the application. This statement is not required and will not have any negative effect on the application if left blank."
              isRequired />
            
          </Fieldset>
        </Fieldset>
        <Button onClick={SaveForm}>Update</Button>
      </Form>

    </Accordion>
  );
};
