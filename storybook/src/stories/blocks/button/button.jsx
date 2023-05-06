import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const {
    variant,
    className,
    label,
    children,
    disabled,
    ...rest
  } = props;

  const classes = classNames(
    'button',
    { [`button--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {label}
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'default',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['blue','blue-outline','green','green-outline','white','white-outline',]),
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.string,
};
