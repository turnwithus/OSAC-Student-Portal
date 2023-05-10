import { Pageshell } from '../layouts/pageshell/pageshell';
import { Marquee } from '../components/marquee/marquee';

export default {
  title: 'Pages/Forgot Password',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ForgotPassword = () => {
  return  (
    <Pageshell variant="light">
      <Marquee
        headingText="Please enter your email"
        btn1style="blue"
        variant="dark"
        isForgot
      />

    </Pageshell>
  );
};
