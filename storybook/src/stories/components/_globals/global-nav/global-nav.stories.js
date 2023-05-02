import { GlobalNav } from './global-nav';

export default {
  title: 'Globals/Navigation',
  component: GlobalNav,
};

export const Default = () => {
  return  (
    <div style={{padding: '1em', backgroundColor: '#333333'}}>
      <GlobalNav/>
    </div>
  );
};
