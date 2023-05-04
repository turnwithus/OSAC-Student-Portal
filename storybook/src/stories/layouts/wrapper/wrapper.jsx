import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Wrapper = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'wrapper',
    { [`wrapper--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Wrapper.defaultProps = {
  variant: 'default',
};

Wrapper.propTypes = {
  variant: PropTypes.oneOf(['default', 'large']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
