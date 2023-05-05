import { Pageshell } from '../layouts/pageshell/pageshell';
import { Image } from '../blocks/image/image';
import { Marquee } from '../components/marquee/marquee';

import imgMarquee2 from '../assets/marquee-fpo-2.jpg';

export default {
  title: 'Pages/Welcome',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Welcome = () => {
  return  (
    <Pageshell variant="light">
      <Marquee 
        variant='split-image'
        className='marquee--dark'
        headingText='Student Portal'
        subHeadingText='Apply for over $38 million in Grants & Scholarships'
        subText='Login to see your applications'
        cta1text='Returning Users Login'
        cta2text='Create an Account'
      >
        <Image source={imgMarquee2} alt="Lorem ipsum" />
      </Marquee>
    </Pageshell>  );
};
