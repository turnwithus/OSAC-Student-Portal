import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { Input } from '../../blocks/input/input';
import { InputCheckbox } from '../../blocks/input-checkbox/input-checkbox';
import { Select } from '../../blocks/select/select';
import { ProgressBar } from '../progress-bar/progress-bar';

export default {
  title: 'Forms/Family Info',
};

export const FamilyInfo = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    alert('Saving your updates.');
  }

  return  (
    <Accordion
      id="y7654"
      label="Family Information & Additional Contact"
    >
      <Form >
        <Fieldset
          labelText="Parent or Guardian's Highest Level of Education"
        >
          <Select 
            id="p1edlvl"
            label="Parent 1"
          >
            <option value="">Some high school</option>
            <option value="">GED or equivalent</option>
            <option value="">Some college</option>
            <option value="">Bachelors or higher degree</option>
            <option value="">Unknown</option>
          </Select>
          <Select 
            id="p2edlvl"
            label="Parent 2"
          >
            <option value="">Some high school</option>
            <option value="">GED or equivalent</option>
            <option value="">Some college</option>
            <option value="">Bachelors or higher degree</option>
            <option value="">Unknown</option>
          </Select>
        </Fieldset>

        <Fieldset
          labelText="Additional Contact"
        >
          <Select id="addlContactType">
            <option value="">Sed ut perspiciatis</option>
            <option value="">Exercitationem</option>
            <option value="">Sit amet</option>
            <option value="">Unde omnis</option>
          </Select>
        </Fieldset>

        <Fieldset>
          <Input id="fiPhone" type="phone" label="Phone number" />
          <Input id="fiEmailAddr" type="email" label="Email" />
        </Fieldset>

        <Fieldset>
          <Input id="fiStreetAddr" label="Street Address" placeholder="Street Address"/>
          <Select id="fi-state-select" label="State" isRequired>
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

        <Fieldset variant="1col">
          <InputCheckbox
            value="textAboutUpdates"
            id="checkBoxTextUpdates"
            label="Text about updates" />
          <InputCheckbox
            value="approveContact"
            id="approveContact"
            label="I approve this contact to also receive my application related emails and/or speak with OSAC staff about my account." />
        </Fieldset>
        <ProgressBar />
        <Button onClick={SaveForm}>Save</Button>
      </Form>

    </Accordion>
  );
};
