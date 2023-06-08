import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Radiocheckgroup = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'radiocheckgroup',
    { [`radiocheckgroup--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <fieldset className={classes} {...rest}>
      <div className="radiocheckgroup__layout">
        {children}
      </div>
    </fieldset>
  );
};

Radiocheckgroup.defaultProps = {
  variant: 'default'
};

Radiocheckgroup.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
