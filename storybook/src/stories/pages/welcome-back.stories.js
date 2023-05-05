import { Pageshell } from '../layouts/pageshell/pageshell';

import { Image } from '../blocks/image/image';
import { Marquee } from '../components/marquee/marquee';

import imgMarqueeStudent from '../assets/marquee-student.jpg';

export default {
  title: 'Pages/Welcome',
  parameters: {
    layout: 'fullscreen',
  },
};

export const WelcomeBack = () => {
  return  (
    <Pageshell hasFlushFooter>
      <Marquee
        headingText="Welcome back, Jessi!"
        subHeadingText="We are getting ready for the grants/scholarships for the coming year of 2024-2025."
        subText="Before we go any further, we recommend you update your information."
        cta1text="Update Now"
        cta2text="No Thanks"
        variant="split-image"
      >
          <Image src={imgMarqueeStudent} alt="lorem ipsum" />
      </Marquee>
    </Pageshell>
  );
};
