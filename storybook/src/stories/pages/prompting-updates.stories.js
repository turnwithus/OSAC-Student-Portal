import { Pageshell } from '../layouts/pageshell/pageshell';
import { Accordion } from '../components/accordion/accordion';
import { Alert } from '../components/alert/alert';
import { Marquee } from '../components/marquee/marquee';

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
        <Alert>
          <strong>Recommended Updates</strong>
          <p>Please update within these sections: High School Information, College Information and College of Choice, Standing, & Plan</p>
        </Alert>
      </Marquee>

      <Accordion
        id="q78458"
        label="Lorem ipsum"
        isRequired
      >
        <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

        <h4>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </Accordion>
    </Pageshell>
  );
};
