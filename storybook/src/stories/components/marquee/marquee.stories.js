import { Marquee } from './marquee';

import { Alert } from '../../components/alert/alert';
import { Button } from '../../blocks/button/button';

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

export const Welcome = () => {
  return  (
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
  );
};

export const WelcomeBack = () => {
  return  (
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
  );
};

export const ForgotPassword = () => {
  return  (
    <Marquee 
      variant="dark"
      headingText="User details"
      btn1style="blue"
      isForgot
    />
  );
};

export const VerificationCode = () => {
  return  (
    <Marquee 
      variant="dark"
      headingText="User details"
      subHeadingText="A verification code has been sent to your inbox. Please copy it to the input box below."
      btn1style="blue"
      isVerification
    />
  );
};

export const ChangePassword = () => {
  return  (
    <Marquee 
      variant="dark"
      headingText="Reset password"
      btn1style="blue"
      isChangePassword
    />
  );
};

export const SignIn = () => {
  return  (
    <Marquee 
      variant="dark"
      headingText="Please sign in"
      btn1style="blue"
      isSignIn
    />
  );
};

export const WrongCredentials = () => {
  return  (
    <Marquee 
      variant="dark"
      headingText="Please sign in"
      btn1style="blue"
      isWrongCredentials
    />
  );
};

export const PromptingUpdates = () => {
  return  (
    <Marquee  
      headingText="Update your information -- Section 1"
      subHeadingText="Please make sure your information is current."
    >
      <Alert>
        <strong>Recommended Updates</strong>
        <p>Please update within these sections: High School Information, College Information and College of Choice, Standing, & Plan</p>
      </Alert>
    </Marquee>
  );
};

export const Grant = () => {
  return  (
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
  );
};
