import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const {
    children,
    className,
    hasError,
    inputID,
    isRequired,
    label,
    labelIsHidden,
    placeholder,
    type,
    variant,
    ...rest
  } = props;

  const classes = classNames(
    'input',
    { hasError },
    { [`input--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div>
      <label 
        htmlFor={inputID} 
        className={labelIsHidden ? 'label sr-only' : 'label'}
      >
        {label} {isRequired && <i className="is-required">*</i>}
      </label>
      <input id={inputID} type={type} placeholder={placeholder} {...isRequired && {required: true}} className={classes} {...rest} />
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
