import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Tooltip } from '../../blocks/tooltip/tooltip'
import { Button } from '../../blocks/button/button'

export const Card = (props) => {
  const {
    variant,
    className,
    children,
    title,
    id,
    description,
    status,
    tooltipText,
    hasChoice,
    ...rest
  } = props;

  const classes = classNames(
    'card',
    `card--${status}`,
    { [`card--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log('generic button click handler');
  }

  return (
    <div className={classes} {...rest}>
      <div className="card__content">
        { tooltipText && 
          <Tooltip>{tooltipText}</Tooltip> 
        }
        <p>
        <strong className="card__title">{title}</strong>
        { id && 
          <em className="card__id">{id}</em>
        }
        </p>
        { children && 
          <div className="card__copy">
            {children}
          </div>
        }
      </div>
      <div className="card__status">
        
        {props.status === 'submitted' && 
        <>
        <i className="card__status-text">{status}</i>
        <Button onClick={handleButtonClick}>Check Status</Button>
        </>
        }
        
        {props.status === 'renewable' && 
        <>
        <i className="card__status-text">{status}</i>
        <Button onClick={handleButtonClick}>Check Status</Button>
        <Button onClick={handleButtonClick}>Decline</Button>
        </>
        }
        
        {props.status === 'eligible' && 
        <>
        <i className="card__status-text">{status}</i>
        <Button onClick={handleButtonClick}>Apply</Button>
        </>
        }
        
        {props.status === 'awarded' && 
        <>
        <i className="card__status-text">{status}</i>
          {props.hasChoice && 
          <>
          <Button onClick={handleButtonClick}>Accept</Button>
          <Button onClick={handleButtonClick}>Decline</Button>
          </>
          }
        </>
        }
        
        {props.status === 'ineligible' && 
        <>
        <i className="card__status-text">{status}</i>
        <Button onClick={handleButtonClick}>See Details</Button>
        </>
        }

      </div>
    </div>
  );
};

Card.defaultProps = {
  title: 'Betty Campbell & Jeannette Crawley',
  tooltipText: 'Lorem ipsum dolor sit amet',
  status: 'eligible',
};

Card.propTypes = {
  variant: PropTypes.oneOf(['default']),
  status: PropTypes.oneOf(['eligible', 'ineligible', 'inprogress', 'awarded', 'renewable', 'submitted']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
