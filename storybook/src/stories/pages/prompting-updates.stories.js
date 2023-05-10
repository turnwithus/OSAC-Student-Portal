import { Pageshell } from '../layouts/pageshell/pageshell';

import { Alert } from '../components/alert/alert';
import { Marquee } from '../components/marquee/marquee';
import { BasicInfo } from '../components/_forms/basic-info.stories';
import { PersonalInfo } from '../components/_forms/personal-info.stories';

export default {
  title: 'Pages/Prompting Updates',
  parameters: {
    layout: 'fullscreen',
  },
};

export const PromptingUpdates = () => {
  return  (
    <Pageshell>
      <Marquee  
        headingText="Update your information -- Section 1"
        subHeadingText="Please make sure your information is current."
      >
        <Alert isDismissable>
          <strong>Recommended Updates</strong>
          <p>Please update within these sections: High School Information, College Information and College of Choice, Standing, & Plan</p>
        </Alert>
      </Marquee>

      <BasicInfo/>
      <PersonalInfo/>
      
    </Pageshell>
  );
};
