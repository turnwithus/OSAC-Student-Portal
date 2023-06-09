import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Wrapper } from '../../layouts/wrapper/wrapper';
import { AppCard } from '../../components/app-card/app-card';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export const Default = () => {
  return  (
      <Tabs>
        <Wrapper>
          <TabList>
            <Tab selected>Eligible</Tab>
            <Tab>Recommended</Tab>
            <Tab>Memberships / Employers</Tab>
          </TabList>

          <TabPanel>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </TabPanel>
          <TabPanel>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </TabPanel>
          <TabPanel>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </TabPanel>
        </Wrapper>
      </Tabs>
  );
};

export const Pagination = () => {
  return  (
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
  );
};

export const NestedExample = () => {
  return  (
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
  );
};
