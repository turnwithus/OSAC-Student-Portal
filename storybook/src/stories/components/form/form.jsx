import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Form = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'form',
    { [`form--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <form className={classes} {...rest}>
      <div className="form__layout">
        {children}
      </div>
    </form>
  );
};

Form.defaultProps = {
  variant: '2col',
};

Form.propTypes = {
  variant: PropTypes.oneOf(['default', '2col']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
