import { AppCard } from './app-card';

export default {
  title: 'Components/AppCard',
  component: AppCard,
  tags: ['autodocs'],
};

export const Default = () => {
  return  (
    <AppCard
      appName="Default Application"
      appNumber="777890"
    />
  );
};

export const AllOptions = () => {
  return  (
    <AppCard
      appName="Sint occaecat cupidatat culpa qui officia deserunt"
      appNumber="045423"
      alertText="Additional information needed"
      isInReview
      isMissingDocs
    />
  );
};
