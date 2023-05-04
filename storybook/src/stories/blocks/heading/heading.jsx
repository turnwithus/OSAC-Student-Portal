import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Heading = (props) => {
  const {
    variant,
    className,
    children,
    element,
    ...rest
  } = props;

  const classes = classNames(
    'heading',
    { [`heading--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const El = element || variant || 'h1';

  return (
    <El className={classes} {...rest}>
      {children}
    </El>
  );
};

Heading.defaultProps = {
  variant: 'h1',
  element: 'h1',
};

Heading.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
