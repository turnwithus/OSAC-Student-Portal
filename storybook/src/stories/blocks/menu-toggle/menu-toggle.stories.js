import { MenuToggle } from './menu-toggle';

export default {
  title: 'Blocks/MenuToggle',
  component: MenuToggle,
};

export const Default = () => {
  return  (
    <div style={{ display: 'inline-block', padding: '1em', backgroundColor: '#333333' }}>
      <MenuToggle />
    </div>
  );
};
