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
    <div className={classes} {...rest}>
      form
      {children}
    </div>
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
