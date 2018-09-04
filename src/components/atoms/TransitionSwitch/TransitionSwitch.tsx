import React from 'react';
import { RouteComponentProps, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface TransitionSwitchProps extends Pick<RouteComponentProps<{}>, 'location'> {
  animation?: string;
}

export const TransitionSwitch: React.SFC<TransitionSwitchProps> = ({
  children,
  location,
  animation = 'fade',
}) => (
  <TransitionGroup>
    <CSSTransition key={location.key} timeout={300} classNames={animation}>
      <Switch location={location}>{children}</Switch>
    </CSSTransition>
  </TransitionGroup>
);
