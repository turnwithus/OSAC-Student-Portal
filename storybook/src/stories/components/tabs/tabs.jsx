import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabsList, TabPanel } from 'react-tabs';
import { Wrapper } from '../../layouts/wrapper/wrapper';

export const Tab = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'tabs__tab',
    { [`${className}`]: className }
  );

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export const TabsList = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'tabs__tab-list',
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export const TabPanelList = (props) => {
  const {
    className,
    children
  } = props;

  const classes = classNames(
    'tabs__panel-list',
    { [`${className}`]: className }
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export const TabPanel = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'tabs__panel',
    'carousel-cell',
    { [`${className}`]: className }
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export const Tabs = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    'tabs',
    { [`tabs--${variant}`]: variant },
    { [`${className}`]: className }
  );

  return <Wrapper>
    <div className={classes} {...rest}>
      {children}
    </div>
  </Wrapper>;
};

/* PROTYPE DEFINITIONS */
Tabs.propTypes = {
  variant: PropTypes.oneOf(['default', 'vertical', 'vert']),
  className: PropTypes.string,
  children: PropTypes.node
};

Tabs.defaultProps = {
  variant: 'default'
};

Tab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

TabsList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

TabPanelList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

TabPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

/* ORGANIZE EXPORTS */
Tabs.Tab = Tab;
Tabs.TabsList = TabsList;
Tabs.Panel = TabPanel;
Tabs.PanelList = TabPanelList;
