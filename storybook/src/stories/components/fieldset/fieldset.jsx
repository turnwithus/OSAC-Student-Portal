import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Fieldset = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'fieldset',
    { [`fieldset--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <fieldset className={classes} {...rest}>
      {children}
    </fieldset>
  );
};

Fieldset.defaultProps = {
  variant: 'default'
};

Fieldset.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
