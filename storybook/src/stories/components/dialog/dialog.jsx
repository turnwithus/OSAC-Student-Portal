import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../../blocks/button/button';

export const Dialog = (props) => {
  const {
    variant,
    className,
    children,
    triggerText,
    ...rest
  } = props;

  const classes = classNames(
    'dialog',
    { [`dialog--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <>
      <Button>{triggerText}</Button>
      <dialog className={classes} {...rest}>
        {children}
        <Button variant="close"><span className="sr-only">close</span></Button>
      </dialog>
    </>
  );
};

Dialog.defaultProps = {
  variant: 'default',
  triggerText: 'Open dialog',
};

Dialog.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  triggerText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
