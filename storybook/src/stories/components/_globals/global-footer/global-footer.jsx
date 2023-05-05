import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Brand } from '../../../blocks/brand/brand';
import { Link } from '../../../blocks/link/link';
import { Wrapper } from '../../../layouts/wrapper/wrapper';


export const GlobalFooter = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'global-footer',
    { [`global-footer--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
  <footer className={classes} {...rest}>
    <Wrapper>
      <div className="global-footer__layout">
        <div className="global-footer__brand">
          <Brand variant="hecc" />
        </div>
        <div className="global-footer__nav">
          <div className="global-footer__nav-item">
            <strong>Quick Links</strong>
            <ul>
              <li><Link variant="white" href="#About">About</Link></li>
              <li><Link variant="white" href="#Contact">Contact</Link></li>
              <li><Link variant="white" href="#Privacy">Privacy</Link></li>
              <li><Link variant="white" href="#Oregon.gov">oregon.gov</Link></li>
            </ul>
          </div>
          <div className="global-footer__nav-item">
            <strong>Connect</strong>
            <p>
              OSAC Office 
              <br />
              3225 25th Street SE
              <br />
              Salem, OR 97302
            </p>

            <Link variant="icon-only" className="instagram" href="#instagram"><span className="sr-only">Check us out on Instagram</span></Link>
            <Link variant="icon-only" className="facebook" href="facebook"><span className="sr-only">Follow us on Facebook</span></Link>
            <Link variant="icon-only" className="twitter" href="twitter"><span className="sr-only">Follow us on Twitter</span></Link>
          </div>
        </div>
        <div className="global-footer__copy">
          <p>
            &copy; 2023 Higher Education Coordinating Commission
          </p>
        </div>
      </div>
    </Wrapper>
  </footer>
  );
};

GlobalFooter.defaultProps = {
  variant: 'default',
};

GlobalFooter.propTypes = {
  variant: PropTypes.oneOf(['default', 'light']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isOpen: PropTypes.bool,
};
