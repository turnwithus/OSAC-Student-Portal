import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Wrapper } from '../../layouts/wrapper/wrapper';

export const Accordion = (props) => {
  const {
    variant,
    className,
    children,
    label,
    isRequired,
    id,
    isOpen,
    ...rest
  } = props;

  const classes = classNames(
    'accordion',
    { [`accordion--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const [accordionOpen, setAccordionOpen] = useState(props.isOpen);

  // elements in a closed accordion must not be able to be tabbed to for ADA concerns. 
  // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
  
  const adaToggle = () => {
    const allChildren = Array.from(
      document.querySelectorAll('.accordion__content a,.accordion__content input,.accordion__content button')
    );

    // set the tabindex to "0" when open, and "-1" when closed
    allChildren.forEach(element => {
      if (element.getAttribute('tabIndex') === '-1') {
        element.setAttribute('tabIndex', '0');
      } else {
        element.setAttribute('tabIndex', '-1');
      }
    });
  }

  // state
  const handleToggle = () => {
    setAccordionOpen((current) => !current);
    adaToggle();
  }

  return (
    <section 
      className={classes} 
      id={id}
      tabIndex="-1"
      {...rest}>
      <Wrapper>
        <button onClick={handleToggle} aria-expanded={accordionOpen} className="accordion__trigger" aria-controls={id} tabIndex="0">
          {label} {isRequired && <i className="required">*</i>}
        </button>

        <div aria-hidden={!accordionOpen} className="accordion__content">
          {children}
        </div>
      </Wrapper>
    </section>
  );
};

Accordion.defaultProps = {
  variant: 'default',
  id: 'id100',
  label: 'Lorem ipsum dolor',
  isOpen: false,
};

Accordion.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  id: PropTypes.string,
  label: PropTypes.string,
  isOpen: PropTypes.bool,
};
