import React, { useId } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const {
    children,
    className,
    hasError,
    hasAction,
    id,
    isRequired,
    label,
    labelIsHidden,
    placeholder,
    type,
    tabIndex,
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
        htmlFor={id} 
        className={labelIsHidden ? 'label sr-only' : 'label'}
      >
        {label} {isRequired && <i className="required">*</i>}
      </label>
      <input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        className={classes} 
        tabIndex={tabIndex}
        {...isRequired && {required: true}} 
        {...rest} 
      />
      {children}
    </div>
  );
};

Input.defaultProps = {
  variant: 'default',
  type: 'text',
  label: 'Input label text',
  placeholder: 'Please enter a value...',
  id: 'input567',
  tabIndex: '-1',
};

Input.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
