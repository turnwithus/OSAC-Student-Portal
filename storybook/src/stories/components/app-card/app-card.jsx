import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../../blocks/button/button';
import { Image } from '../../blocks/image/image';

import IconDocs from '../../assets/icon-documentation.svg';
import IconReview from '../../assets/icon-in-review.svg';

export const AppCard = (props) => {
  const {
    variant,
    className,
    children,
    appNumber,
    appName,
    alertText,
    isInReview,
    isMissingDocs,
    ...rest
  } = props;

  const classes = classNames(
    'app-card',
    { [`app-card--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      <div className="app-card__layout">
        <div className="app-card__info">
          <strong>
            <em>{appNumber}</em>
            {appName}
          </strong>
          { alertText && 
          <div className="app-card__alert">
            { isInReview && 
              <Image src={IconReview} alt="This application is in review" />
            }
            { isMissingDocs && 
              <Image src={IconDocs} alt="This application requires additional documentation" />
            }
            {alertText}
          </div>
          }
        </div>
        <div className="app-card__cta">
          <Button variant="black">Add</Button>
          <Button variant="black-outline">View</Button>
        </div>
      </div>
    </div>
  );
};

AppCard.defaultProps = {
  variant: 'default',
  appName: 'Application Title',
  appNumber: '#06540'
};

AppCard.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
