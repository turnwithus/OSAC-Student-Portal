import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Textarea = (props) => {
  const {
    variant,
    className,
    children,
    id,
    label,
    labelIsHidden,
    isRequired,
    placeholder,
    ...rest
  } = props;

  const classes = classNames(
    'input textarea',
    { [`textarea--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div>
      <label htmlFor={id} className={labelIsHidden ? 'label sr-only' : 'label'}>{label}{isRequired && <i className="required">*</i>}</label>
      <textarea tabIndex="-1" id={id} className={classes} {...rest} placeholder={placeholder}>
        {children}
      </textarea>
    </div>
  );
};

Textarea.defaultProps = {
  label: 'Textarea label:',
  variant: 'default',
  id: 'textarea-1',
  placeholder: 'Start typing here...'
};

Textarea.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
