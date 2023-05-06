import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const {
    variant,
    className,
    children,
    type,
    label,
    labelIsHidden,
    inputID,
    placeholder,
    ...rest
  } = props;

  const classes = classNames(
    'input',
    { [`input--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div>
      <label htmlFor={inputID} className={labelIsHidden ? 'label sr-only' : 'label'}>{label}</label>
      <input id={inputID} type={type} placeholder={placeholder} className={classes} {...rest} />
    </div>
  );
};

Input.defaultProps = {
  variant: 'default',
  type: 'text',
  label: 'Input label text',
  placeholder: 'Please enter a value...',
  inputID: '54768',
};

Input.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
