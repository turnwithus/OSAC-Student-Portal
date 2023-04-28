import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Accordion = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'accordion',
    { [`accordion--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      accordion
      {children}
    </div>
  );
};

Accordion.defaultProps = {
  variant: 'default'
};

Accordion.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
