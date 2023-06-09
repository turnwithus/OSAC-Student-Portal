import { Pageshell } from '../layouts/pageshell/pageshell';
import { Marquee } from '../components/marquee/marquee';
import { Button  } from '../blocks/button/button';
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Wrapper } from '../layouts/wrapper/wrapper';
import { AppCard } from '../components/app-card/app-card';

export default {
  title: 'Example Pages/AddScholarship',
  parameters: {
    layout: 'fullscreen',
  },
};

export const AddScholarship = () => {
  return  (
    <Pageshell>
      <Marquee 
        headingText="Add Scholarship" 
        subHeadingText="Each scholarship has its own eligibility criteria. To review the specific criteria for a scholarship, go to the scholarship description."
      >
        <p>
          Common eligibility requirements are: completion of a FAFSA/ORSAA, institutional type or location, chosen major, GPA or GED scores, transcripts, completion of Personal Statements, and certain extracurricular activities. Extra documents or an essay may be required for some scholarships.
        </p>
        <Button variant="black">Edit Profile</Button>
      </Marquee>

      
      <Tabs>
        <Wrapper>
          <TabList>
            <Tab selected>Eligible</Tab>
            <Tab>Recommended</Tab>
            <Tab>Memberships / Employers</Tab>
          </TabList>

          <TabPanel>
            <Tabs data-pagination="true">
              <Wrapper>
                <TabList>
                  <Tab selected>1</Tab>
                  <Tab>2</Tab>
                  <Tab>3</Tab>
                  <Tab>4</Tab>
                  <Tab>5</Tab>
                </TabList>

                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard appName="Lorem Ipsum Dolor Sit Amet"/>
                  <AppCard isMissingDocs alertText="Missing documentation" />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard isMissingDocs isInReview alertText="Missing documentation and is in review" />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
              </Wrapper>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs data-pagination="true">
              <Wrapper>
                <TabList>
                  <Tab selected>1</Tab>
                  <Tab>2</Tab>
                  <Tab>3</Tab>
                  <Tab>4</Tab>
                  <Tab>5</Tab>
                </TabList>

                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard appName="Lorem Ipsum Dolor Sit Amet"/>
                  <AppCard isMissingDocs alertText="Missing documentation" />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard isMissingDocs isInReview alertText="Missing documentation and is in review" />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
              </Wrapper>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs data-pagination="true">
              <Wrapper>
                <TabList>
                  <Tab selected>1</Tab>
                  <Tab>2</Tab>
                  <Tab>3</Tab>
                  <Tab>4</Tab>
                  <Tab>5</Tab>
                </TabList>

                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard appName="Lorem Ipsum Dolor Sit Amet"/>
                  <AppCard isMissingDocs alertText="Missing documentation" />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard isMissingDocs isInReview alertText="Missing documentation and is in review" />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
                <TabPanel>
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                  <AppCard />
                </TabPanel>
              </Wrapper>
            </Tabs>
          </TabPanel>
        </Wrapper>
      </Tabs>

    </Pageshell>
  );
};
