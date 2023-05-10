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
            placeholder="###-##-####"
            defaultValue="***-**-6127">
            <Fieldset>
              <InputCheckbox 
                label="I do not have a SSN" 
                id="inputCheck824" />
              <InputCheckbox 
                label="I will enter my SSN later"
                id="inputCheck9824"  />
            </Fieldset>
          </Input>
          <Input 
            id="inputSSN76324"
            type="text" 
            label="Confirm Security Number (Optional)"
          >
            <Alert variant="info">If you filled in your SSN, you must confirm here to verify it's you for security purposes.</Alert>
          </Input>
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
          
          <Select id="pi-state-select" label="State" isRequired>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR" selected>Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Select>
        </Fieldset>
        <Fieldset>
        </Fieldset>
        <Button onClick={SaveForm}>Update</Button>
      </Form>

    </Accordion>
  );
};
