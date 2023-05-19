import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tooltip = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'tooltip',
    { [`tooltip--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <a role="tooltip" className={classes} {...rest}>
      <span>
        {children}
      </span>
    </a>
  );
};

Tooltip.defaultProps = {
  variant: 'default'
};

Tooltip.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
