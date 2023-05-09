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
    <Pageshell>
      <Marquee
        headingText="User details"
        btn1style="blue"
        isForgot
      />

    </Pageshell>
  );
};
