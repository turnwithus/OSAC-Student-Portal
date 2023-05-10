import { Accordion } from '../accordion/accordion';
import { Alert } from '../alert/alert';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { Input } from '../../blocks/input/input';
import { InputCheckbox } from '../../blocks/input-checkbox/input-checkbox';
import { Select } from '../../blocks/select/select';

export default {
  title: 'Forms/Personal Info',
};

export const PersonalInfo = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    console.log('Saving your updates.');
  }

  return  (
    <Accordion
      id="accordion-personal-info-form"
      label="Personal Information"
      isRequired
    >
      <Form variant="2col">
        <Fieldset>
          <Input 
            id="inputPwd324"
            type="text" 
            label="Social Security Number (Optional)" 
            placeholder=""
            defaultValue="***-**-6127"
          />
          <Input 
            id="inputSSN76324"
            type="text" 
            label="Confirm Security Number (Optional)"
          >
            <Alert variant="info">If you filled in your SSN, you must confirm here to verify it's you for security purposes.</Alert>
          </Input>
        </Fieldset>
        <Fieldset>
          <div>
            <InputCheckbox 
              label="I do not have a SSN" 
              id="inputCheck824" />
            <InputCheckbox 
              label="I will enter my SSN later"
              id="inputCheck9824"  />
          </div>
        </Fieldset>
        <Fieldset>
          <Input 
            label="Mobile Phone Number" 
            id="inputMbl453" 
            isRequired>
            <InputCheckbox 
            id="inputOK2txt"
            label="Text about updates"
            checked />
          </Input>
          <Input 
            id="inputHousePhone"
            label="House Phone Number" 
          />
        </Fieldset>
        <Fieldset>
          <Input 
            id="inputPermAddr"
            label="Permanent Address" 
            isRequired />
        </Fieldset>
        <Button onClick={SaveForm}>Update</Button>
      </Form>

    </Accordion>
  );
};
