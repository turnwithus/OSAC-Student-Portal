import React, {useState} from 'react';
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

  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [ariaHidden, setAriaHidden] = useState(true);

  const handleToggle = () => {
    setAriaExpanded((current) => !current);
    setAriaHidden((current) => !current);
  }

  // if the `isOpen` prop is defined, open the accordion
  if (props.isOpen !== undefined) {
    /* infinite loop :( 
    setAriaExpanded(true);
    setAriaHidden(false);
    */
  }

  return (
    <section 
      className={classes} 
      id={id}
      tabIndex="-1"
      {...rest}>
      <Wrapper>
        <button onClick={handleToggle} aria-expanded={ariaExpanded} className="accordion__trigger" aria-controls={id} tabIndex="0">
          {label} {isRequired && <i className="required">*</i>}
        </button>

        <div aria-hidden={ariaHidden} className="accordion__content">
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
};

Accordion.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  id: PropTypes.string,
  label: PropTypes.string,
  isOpen: PropTypes.bool,
};
