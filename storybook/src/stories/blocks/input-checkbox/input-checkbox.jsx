import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const InputCheckbox = (props) => {
  const {
    variant,
    className,
    children,
    id,
    label,
    value,
    isChecked,
    ...rest
  } = props;

  const classes = classNames(
    'input-checkbox',
    { [`input-checkbox--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const [checked, setChecked] = React.useState(true);


  return (
    <div className={classes} {...rest}>
      <label className="label" htmlFor={id}>{label}</label>
      <input 
        className="input"
        type="checkbox" 
        value={value} 
        id={id}
        {...isChecked && {defaultChecked: true}} 
        onChange={() => setChecked(!checked)} 
      />      
    </div>
  );
};

InputCheckbox.defaultProps = {
  variant: 'default',
  value: 'Checkbox value',
  id: '987654',
  label: 'Checkbox label',
  isChecked: false,
};

InputCheckbox.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
};
