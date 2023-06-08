import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../../blocks/button/button';

export const Dialog = (props) => {
  const {
    variant,
    className,
    children,
    closeBtnText,
    id,
    isOpen,
    triggerText,
    dialogTitle,
    ...rest
  } = props;

  const classes = classNames(
    'dialog',
    { [`dialog--${variant}`]: variant },
    { [`${className}`]: className }
  );

  const [dialogOpen, setDialogOpen] = useState(props.isOpen);

  const openDialog = () => {
    setDialogOpen(true);
  }

  const closeDialog = () => {
    setDialogOpen(false);
  }

  return (
    <>
      <Button onClick={openDialog}>{triggerText}</Button>
      <dialog className={classes} {...rest} open={dialogOpen}>
        <div className="dialog__layout">
          {dialogTitle && <div className="dialog__title"><strong>{dialogTitle}</strong></div>}
          <div className="dialog__content rhythm">
            {children}
          </div>
          <Button variant="close" onClick={closeDialog}><span className="sr-only">{closeBtnText}</span></Button>
        </div>
      </dialog>
    </>
  );
};

Dialog.defaultProps = {
  variant: 'default',
  triggerText: 'Open dialog',
  closeBtnText: 'Close',
  id: 'dialog676',
  isOpen: null,
};

Dialog.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  triggerText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isOpen: PropTypes.bool,
  id: PropTypes.string,
  dialogTitle: PropTypes.string,
};
