import { Pageshell } from '../layouts/pageshell/pageshell';
import { Button } from '../blocks/button/button';
import { CardDeck } from '../layouts/card-deck/card-deck';
import { Card } from '../components/card/card';
import { Marquee } from '../components/marquee/marquee';

export default {
  title: 'Example Pages/Grants',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Grants = () => {
  return  (
    <Pageshell>
      <Marquee  
        headingText="Grants"
        subHeadingText="Please take a look at the grants available to all of our students.">
        <p>
          Tap on “Edit Profile” to if you want to make some changes within your profile.
          <br />
          Note*: Depending on the information you’ve changed, your eligibility to certain grants may change.
        </p>
        <Button variant="black">Edit Profile</Button>
      </Marquee>

      <CardDeck>

        <Card>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</Card>
        <Card>Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Card>
        <Card>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</Card>
        <Card>Adipisci velit, sed quia non numquam eius modi tempora</Card>
        <Card>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</Card>
        <Card>Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Card>
        <Card>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</Card>
      
      </CardDeck>

    </Pageshell>
  );
};
