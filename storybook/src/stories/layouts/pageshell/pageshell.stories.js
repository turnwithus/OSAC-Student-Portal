import { Pageshell } from './pageshell';

import { Wrapper } from '../wrapper/wrapper';

export default {
  title: 'Layouts/Pageshell',
  component: Pageshell,
};

export const Default = () => {
  return  (
    <Pageshell>
      <Wrapper>
        <div className="component">
          Your components here
        </div>
      </Wrapper>
    </Pageshell>
  );
};
