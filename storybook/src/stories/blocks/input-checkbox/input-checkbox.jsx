import React, { useId } from 'react';
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
    <div className={classes}>
      <label className="label" htmlFor={id}>{label}</label>
      <input 
        className="input"
        type="checkbox" 
        value={value} 
        id={id}
        tabIndex="-1"
        {...isChecked && {defaultChecked: true}} 
        onChange={() => setChecked(!checked)} 
        {...rest}
      />      
    </div>
  );
};

InputCheckbox.defaultProps = {
  variant: 'default',
  value: 'Checkbox value',
  id: { useId },
  label: 'Checkbox label',
  isChecked: false,
};

InputCheckbox.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
};
