import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Form = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'form',
    { [`form--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <form className={classes} {...rest}>
      {children}
    </form>
  );
};

Form.defaultProps = {
  variant: 'default'
};

Form.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
