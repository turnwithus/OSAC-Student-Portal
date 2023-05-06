import { Image } from '../../blocks/image/image';
import { Marquee } from './marquee';

import imgMarquee2 from '../../assets/marquee-fpo-2.jpg';
import imgMarqueeStudent from '../../assets/marquee-student.jpg';

export default {
  title: 'Components/Marquee',
  component: Marquee, 
  tags: ['autodocs'],
};

export const Default = () => {
  return  (
    <Marquee
      headingText='Almost there!'
      subHeadingText='Congratulations on getting this far! We just need a little more information from you in order to help you match with some eligible grants and scholarships.'
      subText='You can always edit your information within “Profile” after completing this Section.'
    />
  );
};

export const SplitImage = () => {
  return  (
    <Marquee
      headingText="Welcome back, Jessi!"
      subHeadingText="We are getting ready for the grants/scholarships for the coming year of 2024-2025."
      subText="Before we go any further, we recommend you update your information."
      cta1text="Update Now"
      cta2text="No Thanks"
      variant="split-image">
        <Image src={imgMarqueeStudent} alt="lorem ipsum" />
    </Marquee>
  );
};

export const Centered = () => {
  return  (
    <Marquee 
      variant="centered"
      headingText='Centered'
    >

    </Marquee>
  );
};

export const Dark = () => {
  return  (
    <Marquee 
      variant="dark"
      headingText='Dark'
    >
      
    </Marquee>
  );
};

export const DarkCentered = () => {
  return  (
    <Marquee 
      variant="centered"
      headingText='User Details'
      className="marquee--dark"
      isLogin
    >
      
    </Marquee>
  );
};

export const SplitImageDark = () => {
  return  (
    <Marquee 
      variant='split-image'
      className='marquee--dark'
      headingText='Student Portal'
      subHeadingText='Apply for over $38 million in Grants & Scholarships'
      subText='Login to see you applications'
      cta1text='Returning Users Login'
      cta2text='Create an Account'
    >
      <Image source={imgMarquee2} alt="Lorem ipsum" role="presentation" />
    </Marquee>
  );
};
