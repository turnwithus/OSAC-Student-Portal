import { Link } from './link';

import iconInstagram from '../../assets/icon-instagram.svg';

export default {
  title: 'Blocks/Link',
  component: Link,
};

export const Default = () => {
  return  (
    <Link>Standard link</Link>
  );
};

export const Icon = () => {
  return  (
    <div style={{padding: '1em', backgroundColor: '#333333'}}>
      <Link variant="icon-only">
        <img src={iconInstagram} alt="Instgram" />
      </Link>
    </div>
  );
};

export const White = () => {
  return  (
    <div style={{padding: '1em', backgroundColor: '#333333'}}>
      <Link variant="white">
        White text
      </Link>
    </div>
  );
};
