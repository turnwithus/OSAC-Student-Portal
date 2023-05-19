import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Wrapper } from '../wrapper/wrapper';

export const CardDeck = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'card-deck',
    { [`card-deck--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      <Wrapper>
        <div className="card-deck__layout">
          {children}
        </div>
      </Wrapper>
    </div>
  );
};

CardDeck.defaultProps = {
  variant: 'default'
};

CardDeck.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
