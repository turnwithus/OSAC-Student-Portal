import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Link } from '../../../blocks/link/link';

export const GlobalNav = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'global-nav',
    { [`global-nav--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <nav className={classes} aria-label="Main navigation" id="Navigation" {...rest}>
      <ul className="global-nav__main">
        <li><Link variant="main-nav" href="#Dashboard">Dashboard</Link></li>
        <li><Link variant="main-nav" href="#Grant">Grant</Link></li>
        <li><Link variant="main-nav" href="#Scholarship">Scholarship</Link></li>
        <li><Link variant="main-nav" href="#Awards">Awards</Link></li>
        <li><Link variant="main-nav" href="#History">History</Link></li>
        <li><Link variant="main-nav" href="#Profile">Profile</Link></li>
        <li><Link variant="main-nav" href="#Messages">Messages</Link></li>
      </ul>
      <ul className="global-nav__utility">
        <li><Link variant="main-nav" href="#Feedback">Feedback</Link></li>
        <li><Link variant="main-nav" href="#Glossary">Glossary</Link></li>
        <li><Link variant="main-nav" href="#Help">Help</Link></li>
        <li><Link variant="main-nav" href="#Logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

GlobalNav.defaultProps = {
  variant: 'default'
};

GlobalNav.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
