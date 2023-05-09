import { Pageshell } from '../layouts/pageshell/pageshell';
import { Marquee } from '../components/marquee/marquee';

export default {
  title: 'Pages/SignIn',
  parameters: {
    layout: 'fullscreen',
  },
};

export const SignIn = () => {
  return  (
    <Pageshell>
      <Marquee
        variant="dark"
        headingText="SignIn"
        isSignIn
      />

    </Pageshell>
  );
};
