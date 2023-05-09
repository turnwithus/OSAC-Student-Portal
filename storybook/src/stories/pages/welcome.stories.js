import { Pageshell } from '../layouts/pageshell/pageshell';
import { Marquee } from '../components/marquee/marquee';

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
        btn1text='Returning Users Login'
        btn1style='white'
        btn2text='Create an Account'
        btn2style='white-outline'
        isWelcome
      >
      </Marquee>
    </Pageshell>  
  );
};
