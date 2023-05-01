import React from 'react';
import PropTypes from 'prop-types';

import { Brand } from '../../../blocks/brand/brand';

export const Header = () => (
  <header className="global-header">
    <div className="wrapper">
      <div className="global-header__layout">
        <Brand />
      </div>
    </div>
  </header>
);

Header.propTypes = {
};

Header.defaultProps = {
};
