import { Pageshell } from '../layouts/pageshell/pageshell';
import { Marquee } from '../components/marquee/marquee';

import { BasicInfo } from '../components/_forms/basic-info.stories';
import { FafsaOrsaa } from '../components/_forms/FAFSA-ORSAA.stories';
import { FamilyInfo } from '../components/_forms/family-info.stories';
import { PersonalInfo } from '../components/_forms/personal-info.stories';
import { WorkStatus } from '../components/_forms/work-status.stories';

export default {
  title: 'Pages/Create Profile',
  parameters: {
    layout: 'fullscreen',
  },
};

export const CreateProfile = () => {
  return  (
    <Pageshell>
      <Marquee
        headingText="Create Your Profile"
        subHeadingText="Welcome to the OSAC Portal! Please fill in as much information as you could about yourself in order to be eligible to some grants and scholarships."
      />

      <BasicInfo />
      <PersonalInfo />
      <FamilyInfo />
      <FafsaOrsaa />
      <WorkStatus />

    </Pageshell>
  );
};
