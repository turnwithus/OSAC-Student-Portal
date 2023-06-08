import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const {
    variant,
    className,
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
    <button className={classes} tabIndex="-1" disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'default',
  disabled: false
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'blue','blue-outline','green','green-outline','white','white-outline', 'dismiss', 'plain', 'black', 'close']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
};
