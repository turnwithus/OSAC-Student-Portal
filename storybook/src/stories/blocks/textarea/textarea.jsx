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
    maxCharecters,
    ...rest
  } = props;

  const classes = classNames(
    'input textarea',
    { [`textarea--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const [count, setCount] = React.useState(0);

  return (
    <div>
      <label htmlFor={id} className={labelIsHidden ? 'label sr-only' : 'label'}>{label}{isRequired && <i className="required">*</i>}</label>
      <textarea 
        tabIndex="-1" 
        id={id} 
        className={classes}
        placeholder={placeholder}
        onChange={e => setCount(e.target.value.length)}
        maxLength={maxCharecters}
        {...rest}>
          {children}
      </textarea>
      <p className="textarea__count"><i>{count}</i>/{maxCharecters} characters.</p>
    </div>
  );
};

Textarea.defaultProps = {
  label: 'Textarea label:',
  variant: 'default',
  id: 'textarea-1',
  placeholder: 'Start typing here...',
  maxCharecters: '1900',
};

Textarea.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
