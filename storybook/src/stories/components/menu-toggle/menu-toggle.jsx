import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const MenuToggle = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'menu-toggle',
    { [`menu-toggle--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <button className={classes} {...rest}>
      <i></i>
      <i></i>
      <i></i>
      <span className="sr-only">Toggle Menu Visibility</span>
    </button>
  );
};

MenuToggle.defaultProps = {
  variant: 'default'
};

MenuToggle.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
