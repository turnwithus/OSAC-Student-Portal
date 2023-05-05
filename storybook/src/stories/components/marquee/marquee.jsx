import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Heading } from '../../blocks/heading/heading';
import { Link } from '../../blocks/link/link';
import { Wrapper } from '../../layouts/wrapper/wrapper';

export const Marquee = (props) => {
  const {
    variant,
    className,
    children,
    headingText,
    subHeadingText,
    subText,
    cta1text,
    cta1url,
    cta2text,
    cta2url,
    ...rest
  } = props;

  const classes = classNames(
    'marquee',
    { [`marquee--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      <Wrapper>
        <div className="marquee__layout">
          <div className="marquee__major">
            <Heading variant="h1">{headingText}</Heading>
            { subHeadingText && <Heading variant="h2" element="h2">{subHeadingText}</Heading> }
            { subText && <Heading variant="h4" element="h3">{subText}</Heading> }
            { cta1text &&
            <div className="marquee__cta">
              { cta1text && <Link variant="button-white" href={cta1url}>{cta1text}</Link>}
              { cta2text && <Link variant="button-outline-white" href={cta2url}>{cta2text}</Link>}
            </div>
            }
          </div>
          
          { children && 
            <div className="marquee__minor">
              {children}
            </div>
          }
        </div>
      </Wrapper>
    </div>
  );
};

Marquee.defaultProps = {
  variant: 'default',
  headingText: 'Nemo enim ipsam'
};

Marquee.propTypes = {
  variant: PropTypes.oneOf(['default', 'split-image', 'centered', 'dark']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
