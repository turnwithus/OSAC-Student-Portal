import { Accordion } from '../accordion/accordion';
import { Button } from '../../blocks/button/button';
import { Form } from '../form/form';
import { Fieldset } from '../fieldset/fieldset';
import { InputRadio } from '../../blocks/input-radio/input-radio';
import { ProgressBar } from '../progress-bar/progress-bar';

export default {
  title: 'Forms/Fafsa Orsaa Filing',
};

export const FafsaOrsaaFiling = () => {
  const SaveForm = (event) => {
    event.preventDefault();
    console.log('Saving your updates.');
  }

  return  (
    <Accordion
      id="accordionfafsa"
      label="FAFSA/ORSAA Filing"
    >
      <Form>
        <Fieldset
          labelText="FAFSA/ORSAA"
          subLabelText="Have you file for FAFSA/PRSAA for 2023-2-24?"
          infoText="Note*: If you do not file for FAFSA/ORSAA, knw that you will not be considered for any grants or scholarships that requires them."
        >
          <InputRadio
            id="radioFAFSAyes"
            name="filedFAFSAORSAA"
            label="Yes, I have filed for FAFSA/ORSAA"
            value="yes" />
          <InputRadio
            id="radioFAFSAno"
            name="filedFAFSAORSAA"
            label="No, I will not file for FAFSA/ORSAA"
            value="no" />
          <InputRadio
            id="radioFAFSAlater"
            name="filedFAFSAORSAA"
            label="I will file for FAFSA/ORSAA later"
            value="later" />
        </Fieldset>
        <ProgressBar progress={60} />
        <Button onClick={SaveForm}>Save</Button>
      </Form>

    </Accordion>
  );
};
