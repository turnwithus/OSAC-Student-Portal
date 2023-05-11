import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const ProgressBar = (props) => {
  const {
    variant,
    className,
    progress,
    ...rest
  } = props;

  const classes = classNames(
    'progress-bar',
    { [`progress-bar--${variant}`]: variant },
    { [`${className}`]: className }
  );

  console.log(progress);

  return (
    <div className={classes} {...rest}>
      <i className="progress-bar__indicator" style={{width: progress +'%'}}>{progress}% Completed</i>
    </div>
  );
};

ProgressBar.defaultProps = {
  variant: 'default',
  progress: '34'
};

ProgressBar.propTypes = {
  variant: PropTypes.oneOf(['default']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  progress: PropTypes.number,
};
