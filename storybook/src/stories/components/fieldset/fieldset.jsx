import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Fieldset = (props) => {
  const {
    variant,
    className,
    children,
    labelText,
    subLabelText,
    infoText,
    ...rest
  } = props;

  const classes = classNames(
    'fieldset',
    { [`fieldset--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <fieldset className={classes} {...rest}>
      { labelText && 
        <p className="fieldset__label">{labelText}</p>
      }
      {children}
    </fieldset>
  );
};

Fieldset.defaultProps = {
  variant: 'default'
};

Fieldset.propTypes = {
  variant: PropTypes.oneOf(['default', '1col']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  labelText: PropTypes.string,
  subLabelText: PropTypes.string,
  infoText: PropTypes.string,
};
