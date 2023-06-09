import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { Input } from '../../blocks/input/input';
import { InputCheckbox } from '../../blocks/input-checkbox/input-checkbox';
import { InputRadio } from '../../blocks/input-radio/input-radio';
import { Select } from '../../blocks/select/select';
import { SubForm } from '../../components/sub-form/sub-form';

export default {
  title: 'Example Forms/College Information',
};

export const CollegeInformation = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    console.log('Saving your updates.');
  }

  const AddPrevious = (event) => {
    event.preventDefault();
    console.log('Add previous college experience function...')
  }

  const HandleSubFormAdd = (event) => {
    event.preventDefault();
    console.log('Subform add function')
  }

  const HandleFileClick = (event) => {
    console.log('Event for file upload')
  }

  return  (
    <Accordion
      id="collegeInfo78458"
      label="College Information"
    >
      <Form variant="2col">
        <Fieldset
          variant="1col"
          labelText="College History"
          subLabelText="Do you have any college history?"
          infoText="Note*: Filling this in can give you eligibility to more grants/scholarships"
          isRequired
        >
          <InputRadio name="radioCollegeHistory" id="radioCollegeHistoryYes" label="Yes" isChecked />
          <InputRadio name="radioCollegeHistory" id="radioCollegeHistoryNo" label="No" />
        </Fieldset>

        <Fieldset
          labelText="Currently Attending College(s)"
          infoText="Note*: Filling this in can give you eligibility to more grants/scholarships"
          isRequired
        />

        <Fieldset variant="1col">
          <SubForm buttonText="Remove">
            <Fieldset variant="1col">
              <Select 
                id="ciSelectCollege"
                label="College/University Name"
              >
                <option>College</option>
                <option>Enim Aad</option>
                <option>Minima Quis</option>
                <option>Veniam Nostrum</option>
                <option>Quis Exercitationem</option>
              </Select>
              <InputCheckbox 
                label="My college is not listed"
                isChecked
              />
            </Fieldset>
            <Fieldset>
              <Input 
                id="unlistedCollegeName"
                placeholder="University of California, Riverside"
                isRequired
              />
            </Fieldset>
            <Fieldset>
              <Input
                label="Start Date"
                type="date"
                id="startDateCollege"
                isRequired
              />
            </Fieldset>
            <Fieldset>
              <Select 
                id="selectDegreeEarned01"
                isRequired
              >
                <option value="none">No Degree Given</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="doctorate">Doctorate</option>
              </Select>
              <Input 
                id="creditsEarned01"
                isRequired
                label="Credits earned"
                placeholder="0"
              />
            </Fieldset>
          </SubForm>
          <div>
            <Button variant="green-outline" onClick={HandleSubFormAdd}>Add</Button>
          </div>
        </Fieldset>

        <Fieldset
          labelText="Previously Attending College(s)"
          infoText="Note*: Filling this in can give you eligibility to more grants/scholarships"
        >
          <div>
            <Button onClick={AddPrevious} variant="green-outline">Add</Button>
          </div>
        </Fieldset>

        <Fieldset 
          labelText="Will you have finished 2 Academic Years towards a degree or certificate at a community college by July 1, 2024"
          infoText="Note*: [Name], [Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships require these."
          variant="1col"
          isRequired
        >
          <InputRadio name="2AcademicYears" id="2AcademicYearsYes" label="Yes" />
          <InputRadio name="2AcademicYears" id="2AcademicYearsNos" label="No" />
        </Fieldset>

        <Fieldset
          labelText="Cumulative Undergraduate GPA"
          infoText="Note*: [Name], [Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships require these."
        >
          <Input
            id="cumulativeGPA"
            placeholder="3.25"
            labelIsHidden
          >
            <InputCheckbox
              id="CheckboxNoGrades"
              label="My college did not assign grades"
              value="nogrades"
            />
          </Input>
        </Fieldset>

        <Fieldset
          labelText="Cumulative Graduate GPA"
          infoText="Note*: [Name], [Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships require these."
        >
          <Input 
            id="undergradGPA"
            placeholder="Undergraduate GPA"
            labelIsHidden
          />
        </Fieldset>

        <Fieldset
          labelText="Transcripts"
          subLabelText="Certain Grants & Scholarship require these. Please upload your most recent transcripts (within the last 10 years) for submission."
          infoText="Note*: [Name], [Name] & [Name] Grants and [Name], [Name] & [Name] Scholarships require these."
        >
          <Input type="file" label="Upload File(s)" onClick={HandleFileClick}/>
        </Fieldset>

        <Button onClick={SaveForm}>Update</Button>
      </Form>
    </Accordion>
  );
};
