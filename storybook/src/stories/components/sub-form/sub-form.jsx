import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../../blocks/button/button';

export const SubForm = (props) => {
  const {
    variant,
    className,
    children,
    buttonText,
    ...rest
  } = props;

  const classes = classNames(
    'sub-form',
    { [`sub-form--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const handleSubForm = () => {
    console.log('Subform submitted');
  }

  return (
    <div className={classes} {...rest}>
      {children}
      <Button variant="black" onClick={handleSubForm}>{buttonText}</Button>
    </div>
  );
};

SubForm.defaultProps = {
  variant: 'default',
  buttonText: 'Add'
};

SubForm.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
