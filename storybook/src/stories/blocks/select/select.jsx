import React, { useId } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Select = (props) => {
  const {
    variant,
    className,
    children,
    label,
    id,
    labelIsHidden,
    ...rest
  } = props;

  const classes = classNames(
    'select input',
    { [`select--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div>
      <label htmlFor={id} className={labelIsHidden ? 'label sr-only' : 'label'}>{label}</label>
      <select tabIndex="-1" id={id} className={classes} {...rest}>
        {children}
      </select>
    </div>
  );
};

Select.defaultProps = {
  variant: 'default',
  label: 'Select one of the following: ',
  id: { useId }
};

Select.propTypes = {
  variant: PropTypes.oneOf(['default']),
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
