import { Pageshell } from '../layouts/pageshell/pageshell';
import { Marquee } from '../components/marquee/marquee';

export default {
  title: 'Pages/Welcome Back',
  parameters: {
    layout: 'fullscreen',
  },
};

export const WelcomeBack = () => {
  return  (
    <Pageshell hasFlushFooter variant="light">
      <Marquee
        headingText="Welcome back, Jessi!"
        subHeadingText="We are getting ready for the grants/scholarships for the coming year of 2024-2025."
        subText="Before we go any further, we recommend you update your information."
        btn1text="Update Now"
        btn1style="white"
        btn2text="No Thanks"
        btn2style="white-outline"
        variant="split-image"
        className="marquee--dark"
        isWelcomeBack
      />
    </Pageshell>
  );
};
