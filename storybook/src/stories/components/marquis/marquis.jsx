import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Heading } from '../../blocks/heading/heading';
import { Wrapper } from '../../layouts/wrapper/wrapper';

export const Marquis = (props) => {
  const {
    variant,
    className,
    children,
    headingText,
    subHeadingText,
    subText,
    ...rest
  } = props;

  const classes = classNames(
    'marquis',
    { [`marquis--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      <Wrapper>
        <div className="marquis__layout">
          <div className="marquis__content">
            <Heading variant="h1">{headingText}</Heading>
            { subHeadingText && <Heading variant="h2" element="h2">{subHeadingText}</Heading> }
            { subText && <Heading variant="h4" element="h3">{subText}</Heading> }
            {children}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

Marquis.defaultProps = {
  variant: 'default',
  headingText: 'Nemo enim ipsam'
};

Marquis.propTypes = {
  variant: PropTypes.oneOf(['default', 'split-image', 'centered', 'dark']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
