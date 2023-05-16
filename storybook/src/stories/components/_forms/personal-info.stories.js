import { Accordion } from '../accordion/accordion';
import { Alert } from '../alert/alert';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { Input } from '../../blocks/input/input';
import { InputCheckbox } from '../../blocks/input-checkbox/input-checkbox';
import { InputRadio } from '../../blocks/input-radio/input-radio';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Select } from '../../blocks/select/select';

export default {
  title: 'Forms/Personal Info',
};

export const PersonalInfo = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    alert('Saving your updates.');
  }

  return  (
    <Accordion
      id="accordion-personal-info-form"
      label="Personal Information"
      isRequired
    >
      <Form>
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
            isChecked />
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
          <Input 
            id="county4536" 
            label="County" 
            isRequired
          />
          <Input 
            id="city6789" 
            label="City" 
            isRequired
          />
          <Input 
            id="zip6783" 
            label="Zip Code" 
            isRequired
          />
        </Fieldset>
        <Fieldset
          labelText="Are you a U.S Citizen?"
          variant="1col"
        >
          <InputRadio id="uscitizen5678" name="uscitizen" value="yes" label="Yes" isChecked />
          <InputRadio id="uscitizen5679" name="uscitizen" value="no" label="No" />
        </Fieldset>
        <Fieldset
          labelText="Ethnic Identity"
          subLabelText="I identify my ethnicity as (please select the description below that best corresponds to the race or ethnic group(s) with which you identify):"
          infoText="Note*: Filling this can give you eligibility to more grants/scholarships."
          variant="1col"
        >

          <InputRadio id="ethnic01" name="ethnicid" value="1" label="Alaskan Native / American Indian / Indigenous American / Native American" />
          <InputRadio id="ethnic02" name="ethnicid" value="1" label="Black/of African descent" />
          <InputRadio id="ethnic03" name="ethnicid" value="1" label="East Asian (inclusive of Chinese, Japanese, Japanese, Korean, Mongolian, Tibetan, and Taiwanese)" />
          <InputRadio id="ethnic04" name="ethnicid" value="1" label="Latino AX/Hispanic" />
          <InputRadio id="ethnic05" name="ethnicid" value="1" label="Middle Eastern" />
          <InputRadio id="ethnic06" name="ethnicid" value="1" label="Pacific Islander" />
          <InputRadio id="ethnic07" name="ethnicid" value="1" label="South Asian (inclusive of Bangladeshi, Bhutanese, Indian, Pakistani, and Sri Lankan)" />
          <InputRadio id="ethnic08" name="ethnicid" value="1" label="Southeast Asian (inclusive of Burmese, Cambodian, Filipino, Hmong, Indonesian, Laotian, Malaysian, Mien, Singaporean, Thai, and Vietnamese)" />
          <InputRadio id="ethnic09" name="ethnicid" value="1" label="White/Caucasian" />
          <InputRadio id="ethnic10" name="ethnicid" value="1" label="My ethnic identity is not listed" isChecked>
            <Input id="ethnic11" name="ethnicid" defaultValue="other" labelIsHidden />
          </InputRadio>
        </Fieldset>

        <Fieldset
          labelText="Enrolled Tribe"
          subLabelText="Please select if you identify as an Enrolled Tribe."
          isRequired
        >
          <Select id="pi-enrolled-tribe" labelIsHidden isRequired>
            <option value="001">Option 1</option>
            <option value="002">Option 2</option>
            <option value="003">Option 3</option>
            <option value="004">Option 4</option>
          </Select>
        </Fieldset>

        <Fieldset>
          <Select id="pi-gi" label="Gender Identity" isRequired>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="trans-female-woman">Trans Female/Woman</option>
            <option value="trans-male-man">Trans Male/Man</option>
            <option value="Non-binary/Genderqueer/Gender Non-conforming">Non-binary/Genderqueer/Gender Non-conforming</option>
            <option value="Different identity">Different Identity</option>
            <option value="Choose Not to Say">Choose Not to Say</option>
          </Select>
        </Fieldset>

        <Fieldset 
          labelText="Pronouns"
          subLabelText="I identify as:"
        >
          <Select id="pi-pronouns" labelIsHidden isRequired>
            <option value="she/her/hers">She/Her/Hers</option>
            <option value="he/him/his">He/Him/His</option>
            <option value="They/Them/Their">They/Them/Their</option>
            <option value="Other pronouns">Other pronouns</option>
          </Select>
        </Fieldset>

        <Fieldset
          labelText="Military identity"
          subLabelText="I identify for the following:"
          infoText="Note*: Filling this in can give you eligibility to more grants/scholarships."
        >
          <InputRadio id="military1" name="military1" value="" label="Joining the Army/Navy Academy" />
          <InputRadio id="military2" name="military1" value="" label="Entering the Military/Navy" />
          <InputRadio id="military3" name="military1" value="" label="Active Duty" />
          <InputRadio id="military4" name="military1" value="" label="Veteran" />
        </Fieldset>

        <Fieldset
          labelText="Select all that apply"
          infoText="Note*: Filling this may give you eligibility to the following: [Name], [Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships."
          variant="1col"
          isRequired
        >
          <InputCheckbox 
            id="checkboxDeps"
            label="Have Dependent Children" />
          <InputCheckbox 
            id="checkboxNatlGuard"
            label="Currently Serving in the Oregon National Guard" />
          <InputCheckbox 
            id="checkboxFosterCare"
            label="Currently or Formerly living in Foster Care or Participating in an Independent Living Program" />
          <InputCheckbox 
            id="checkboxNone1234"
            label="None of the above" />
        </Fieldset>

        <Fieldset
          labelText="Will your degree be related to working with or supporting work in the field of Early Learning and Care?"
          infoText="Note*: [Name],[Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships require these."
          isRequired
        >
          <InputRadio id="radioDegreeY" name="radioDegree1" value="" label="Yes" />
          <InputRadio id="radioDegreeN" name="radioDegree1" value="" label="No" />
        </Fieldset>

        <Fieldset
          labelText="Are you the dependent of a public safety officer in the state of Oregon who was killed or disabled in the line of duty?"
          infoText="Note*: [Name],[Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships require these."
          isRequired
        >
          <InputRadio id="radioPSdepY" name="radioDegree1" value="" label="Yes" />
          <InputRadio id="radioPSdepN" name="radioDegree1" value="" label="No" />
        </Fieldset>

        <Fieldset
          labelText="Applicant type"
          infoText="Note*: [Name],[Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships require these."
          isRequired
        >
          <InputRadio id="radioAppType321" name="radioAppType1" value="" label="Test Applicant (HS junior or below, counselor, educator, parent, volunteer)" />
          <InputRadio id="radioAppType123" name="radioAppType1" value="" label="Student Applicant" />
        </Fieldset>

        <Fieldset
          labelText="Will you be an Oregon resident for 12 months prior to college enrollment?"
          isRequired
        >
          <InputRadio id="radioOregonRes321" name="radioORres1" value="" label="Yes" />
          <InputRadio id="radioOregonRes123" name="radioORres1" value="" label="No" />
        </Fieldset>

        <Button onClick={SaveForm}>Update</Button>
        <ProgressBar />
      </Form>

    </Accordion>
  );
};
