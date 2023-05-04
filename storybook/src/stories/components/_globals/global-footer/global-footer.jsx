import React from 'react';

import { Link } from '../../../blocks/link/link';
import { Wrapper } from '../../../layouts/wrapper/wrapper';

import imgHecc from '../../../assets/hecc-logo.png';
import iconTwitter from '../../../assets/icon-twitter.svg';
import iconFacebook from '../../../assets/icon-facebook.svg';
import iconInstagram from '../../../assets/icon-instagram.svg';

export const GlobalFooter = () => (
  <footer className="global-footer">
    <Wrapper>
      <div className="global-footer__layout">
        <div className="global-footer__brand">
          <img src={imgHecc} alt="Higher Education Coordinating Commission" />
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

            <Link variant="icon-only" href="#instagram"><img src={iconInstagram} alt="Instagram icon"/><span className="sr-only">Check us out on Instagram</span></Link>
            <Link variant="icon-only" href="facebook"><img src={iconFacebook} alt="Facebook icon"/><span className="sr-only">Follow us on Facebook</span></Link>
            <Link variant="icon-only" href="twitter"><img src={iconTwitter} alt="Twitter icon"/><span className="sr-only">Follow us on Twitter</span></Link>
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

GlobalFooter.propTypes = {
};

GlobalFooter.defaultProps = {
};
