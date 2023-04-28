import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Link = (props) => {
  const {
    variant,
    className,
    children,
    href,
    ...rest
  } = props;

  const classes = classNames(
    'link',
    { [`link--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <a className={classes} href={href} {...rest}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  variant: 'default',
  href: '#URL',
};

Link.propTypes = {
  variant: PropTypes.oneOf(['default', 'white', 'icon-only']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
