import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const {
    variant,
    className,
    label,
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
};

Button.parameters = {
  a11y: {
    disable: true,
  },
};
