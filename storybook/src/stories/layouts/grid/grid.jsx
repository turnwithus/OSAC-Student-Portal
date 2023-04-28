import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Grid = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'grid',
    { [`grid--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      grid
      {children}
    </div>
  );
};

Grid.defaultProps = {
  variant: 'default'
};

Grid.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
