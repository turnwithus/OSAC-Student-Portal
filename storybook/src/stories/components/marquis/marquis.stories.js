import { Marquis } from './marquis';

export default {
  title: 'Components/Marquis',
  component: Marquis,
};

export const Default = () => {
  return  (
    <Marquis
      headingText='Almost there!'
      subHeadingText='Congratulations on getting this far! We just need a little more information from you in order to help you match with some eligible grants and scholarships.'
      subText='You can always edit your information within “Profile” after completing this Section.'
    />
  );
};

export const SplitImage = () => {
  return  (
    <Marquis>Split Image Marquis</Marquis>
  );
};

export const Centered = () => {
  return  (
    <Marquis variant="centered">Centered Marquis</Marquis>
  );
};

export const Dark = () => {
  return  (
    <Marquis variant="dark">Dark Marquis</Marquis>
  );
};

export const DarkCentered = () => {
  return  (
    <Marquis variant="centered" className="marquis--dark">Dark Centered Marquis</Marquis>
  );
};

export const SplitImageDark = () => {
  return  (
    <Marquis variant="split" className="marquis--dark">Split Image Dark Marquis</Marquis>
  );
};
