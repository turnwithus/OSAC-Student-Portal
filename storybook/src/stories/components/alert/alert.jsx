import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../../blocks/button/button';

export const Alert = (props) => {
  const {
    variant,
    className,
    children,
    isDismissable,
    ...rest
  } = props;

  const classes = classNames(
    'alert',
    { [`alert--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const [dismissed, setDismissed] = React.useState(false);

  const dismiss = () => {
    console.log('I bid you good day, sir. Good DAY.');
    setDismissed((current) => !current);
  }

  return (
    <div className={classes} {...rest} aria-hidden={dismissed}>
      {children}

      { isDismissable && 
      <Button variant="dismiss" onClick={dismiss}><span className="sr-only">Dismiss</span></Button>
      }
    </div>
  );
};

Alert.defaultProps = {
  variant: 'default',
  isDismissable: true,
};

Alert.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isDismissable: PropTypes.bool,
};
