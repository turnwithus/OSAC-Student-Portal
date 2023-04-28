import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Image = (props) => {
  const {
    variant,
    className,
    source,
    alt,
    ...rest
  } = props;

  const classes = classNames(
    'image',
    { [`image--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <img src={source} className={classes} alt={alt} {...rest} />
  );
};

Image.defaultProps = {
  source: '//fpoimg.com/320x180?text=FPO&text_color=ffffff',
  variant: 'default',
  alt: 'Alt text enables users accessing this component on an alternate device, such as a screenreader, to understand the nature and context of the image',
};

Image.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
};
