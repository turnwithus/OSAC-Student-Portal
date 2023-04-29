import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Component = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'component',
    { [`component--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      component
      {children}
    </div>
  );
};

Component.defaultProps = {
  variant: 'default'
};

Component.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
