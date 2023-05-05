import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { GlobalHeader } from '../../components/_globals/global-header/global-header';
import { GlobalFooter } from '../../components/_globals/global-footer/global-footer';

export const Pageshell = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'pageshell',
    { [`pageshell--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      <GlobalHeader variant={variant} />
        <main htmlid="main">
          {children}
        </main>
      <GlobalFooter variant={variant} />
    </div>
  );
};

Pageshell.defaultProps = {
  variant: 'default'
};

Pageshell.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
