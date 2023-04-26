import React from 'react';

import imgHecc from '../../assets/hecc-logo.png';

export const Footer = () => (
  <footer className="global-footer">
    <div className="wrapper">
      <div className="global-footer__layout">
        <div className="global-footer__brand">
          <img src={imgHecc} alt="Higher Education Coordinating Commission" />
        </div>
        <div className="global-footer__nav">
          Navigation
        </div>
        <div className="global-footer__copy">
          <p>
            &copy; 2023 Higher Education Coordinating Commission
          </p>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
};

Footer.defaultProps = {
};
