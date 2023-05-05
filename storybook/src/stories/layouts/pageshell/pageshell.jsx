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
    hasFlushFooter,
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
        <main id="main">
          {children}
        </main>
      {hasFlushFooter && 
      <GlobalFooter variant={variant} className="global-footer--flush"/>
      }
      {!hasFlushFooter && 
      <GlobalFooter variant={variant}/>
      }
    </div>
  );
};

Pageshell.defaultProps = {
  variant: 'default',
  hasFlushFooter: false,
};

Pageshell.propTypes = {
  hasFlushFooter: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'light']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
