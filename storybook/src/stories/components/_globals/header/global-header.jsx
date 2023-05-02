import React from 'react';
import PropTypes from 'prop-types';

import { Brand } from '../../../blocks/brand/brand';
import { GlobalNav } from '../global-nav/global-nav';

export const Header = () => (
  <header className="global-header">
    <div className="wrapper">
      <div className="global-header__layout">
        <div className="global-header__brand">
          <Brand />
        </div>
        <div className="global-header__nav">
          <GlobalNav />
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
};

Header.defaultProps = {
};
