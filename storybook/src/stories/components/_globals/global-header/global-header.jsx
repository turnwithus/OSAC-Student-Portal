import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Brand } from '../../../blocks/brand/brand';
import { GlobalNav } from '../../../components/_globals/global-nav/global-nav';
import { MenuToggle } from '../../../blocks/menu-toggle/menu-toggle';
import { Wrapper } from '../../../layouts/wrapper/wrapper';

export const GlobalHeader = (props) => {
  const {
    variant,
    className,
    children,
    isOpen,
    ...rest
  } = props;

  const classes = classNames(
    'global-header',
    { [`global-header--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const body = document.querySelector('body');

  /* 
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isScrolled = currPos.y > prevPos.y;

      if (!isScrolled) {
        body.classList.add('is-scrolled');
      } else {
        body.classList.remove('is-scrolled');
      }
    }
  )
  */

  const [navOpen, setNavOpen] = useState(props.isOpen);

  const handleToggle = () => {
    const toggle = document.querySelector('.js-menu-toggle');
    const nav = document.querySelector('.js-navigation');
    const body = document.querySelector('body');

    setNavOpen((current) => !current);

    toggle.setAttribute('aria-expanded', navOpen);
    nav.setAttribute('aria-hidden', navOpen);
    body.classList.toggle('nav-open');
  };

  return (
    <header className={classes} {...rest}>
      <Wrapper>
        <div className="global-header__layout">
          <div className="global-header__brand">
            <Brand />
          </div>
          <div className="global-header__nav js-navigation">
            <GlobalNav />
          </div>
          <div className="global-header__toggle">
            <MenuToggle aria-expanded={navOpen} onClick={handleToggle} className="js-menu-toggle" />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

GlobalHeader.defaultProps = {
  variant: 'default',
  isOpen: false,
};

GlobalHeader.propTypes = {
  variant: PropTypes.oneOf(['default', 'light']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isOpen: PropTypes.bool,
};
