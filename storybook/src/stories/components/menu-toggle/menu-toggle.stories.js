import { MenuToggle } from './menu-toggle';

export default {
  title: 'Components/MenuToggle',
  component: MenuToggle,
};

export const Default = () => {
  return  (
    <div style={{padding: '1em', backgroundColor: '#333333'}}>
      <MenuToggle />
    </div>
  );
};
