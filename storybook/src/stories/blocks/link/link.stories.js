import { Link } from './link';

import iconInstagram from '../../assets/icon-instagram.svg';

export default {
  title: 'Blocks/Link',
  component: Link,
  tags: ['autodocs'],
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

export const Button = () => {
  return  (
    <Link variant="button">
      Link Button
    </Link>
  );
};

export const ButtonWhite = () => {
  return  (
    <div style={{padding: '1em', backgroundColor: '#333333'}}>
      <Link variant="button-white">
        Link Button White
      </Link>
    </div>
  );
};

export const ButtonSecondary = () => {
  return  (
    <div style={{padding: '1em', backgroundColor: 'transparent'}}>
      <Link variant="button-outline">
        Link Button Outline
      </Link>
    </div>
  );
};
