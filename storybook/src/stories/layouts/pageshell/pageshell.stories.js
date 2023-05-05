import { Pageshell } from './pageshell';

import { Wrapper } from '../wrapper/wrapper';

export default {
  title: 'Layouts/Pageshell',
  component: Pageshell,
  parameters: {
    layout: 'fullscreen',
  },
};

export const FlushFooter = () => {
  return  (
    <Pageshell hasFlushFooter>
      <Wrapper>
        <div className="component">
          Your components here
        </div>
      </Wrapper>
    </Pageshell>
  );
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

export const Light = () => {
  return  (
    <Pageshell variant="light">
      <Wrapper>
        <div className="component">
          Your components here
        </div>
      </Wrapper>
    </Pageshell>
  );
};

export const FlushLight = () => {
  return  (
    <Pageshell variant="light" hasFlushFooter>
      <Wrapper>
        <div className="component">
          Your components here
        </div>
      </Wrapper>
    </Pageshell>
  );
};
