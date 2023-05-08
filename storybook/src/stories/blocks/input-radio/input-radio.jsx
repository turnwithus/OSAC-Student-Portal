import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const InputRadio = (props) => {
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
    'input-radio',
    { [`input-radio--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const [checked, setChecked] = React.useState(true);

  return (
    <div className={classes}>
      <label className="label" htmlFor={id}>{label}</label>
      <input
        className="input"
        type="radio"
        value={value}
        id={id}
        {...isChecked && {defaultChecked: true}} 
        onChange={() => setChecked(!checked)} 
        {...rest}
      />
    </div>
  );
};

InputRadio.defaultProps = {
  variant: 'default',
  value: 'a',
  id: '78543',
  label: 'Radio label',
  isChecked: false,
};

InputRadio.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
