import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const {
    variant,
    className,
    label,
    disabled,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'button',
    { [`button--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <button
      type="button"
      className={classes} 
      disabled={disabled}
      {...rest}
    >
      {label}
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'default',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'secondary']),
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
