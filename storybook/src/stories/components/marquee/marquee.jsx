import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../../blocks/button/button';
import { Heading } from '../../blocks/heading/heading';
import { Image } from '../../blocks/image/image';
import { Wrapper } from '../../layouts/wrapper/wrapper';

import imgMarquee1 from '../../assets/marquee-fpo-1.jpg';
import imgMarquee2 from '../../assets/marquee-fpo-2.jpg';

export const Marquee = (props) => {
  const {
    variant,
    className,
    children,
    headingText,
    subHeadingText,
    subText,
    btn1text,
    btn1style,
    btn2text,
    btn2style,
    isForgot,
    isVerification,
    isPasswordChange,
    isWelcome,
    isWelcomeBack,
    ...rest
  } = props;

  const classes = classNames(
    'marquee',
    { [`marquee--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const sendVerification = () => {
    alert('sending verification');
    // your function to handle verification
  }

  const btn1Onclick = () => {
    alert('Button 1 clicked');
  }

  const btn2Onclick = () => {
    alert('Button 2 clicked');
  }

  return (
    <div className={classes} {...rest}>
      <Wrapper>
        <div className="marquee__layout">
          <div className="marquee__major">
            <Heading variant="h1">{headingText}</Heading>
            { subHeadingText && <Heading variant="h2" element="h2">{subHeadingText}</Heading> }
            { subText && <Heading variant="h4" element="h3">{subText}</Heading> }
            { btn1text &&
            <div className="marquee__cta">
              { btn1text && <Button variant={btn1style} onClick={btn1Onclick}>{btn1text}</Button>}
              { btn2text && <Button variant={btn2style} onClick={btn2Onclick}>{btn2text}</Button>}
            </div>
            }
            { isForgot && 
            <div className="marquee__login">
              <fieldset>
                <input className="input" type="text" placeholder="Email address" />
              </fieldset>
              <Button variant="white" onClick={sendVerification}>Send verification code</Button>
            </div>
            }
          </div>
          { isWelcome && 
          <div className="marquee__minor" role="presentation">
            <Image source={imgMarquee1} alt="Lorem ipsum" />
          </div>
          }
          { isWelcomeBack && 
          <div className="marquee__minor" role="presentation">
            <Image source={imgMarquee2} alt="Lorem ipsum" />
          </div>
          }
        </div>
      </Wrapper>
    </div>
  );
};

Marquee.defaultProps = {
  variant: 'default',
  headingText: 'Nemo enim ipsam',
  cta1url: '#url1',
  cta2url: '#url2',
};

Marquee.propTypes = {
  variant: PropTypes.oneOf(['default', 'split-image', 'centered', 'dark']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isLogin: PropTypes.bool,
  isVerification: PropTypes.bool,
  isPasswordChange: PropTypes.bool,
};
