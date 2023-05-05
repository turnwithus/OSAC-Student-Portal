import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Brand = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'brand',
    { [`brand--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      <div className="sr-only">
        {children}
      </div>
    </div>
  );
};

Brand.defaultProps = {
  variant: 'default',
};

Brand.propTypes = {
  variant: PropTypes.oneOf(['default', 'hecc']),
  className: PropTypes.string,
  label: PropTypes.string,
};
