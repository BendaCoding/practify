import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Fade: React.SFC<any> = ({
  children,
  trigger,
}) => (
  <TransitionGroup>
    <CSSTransition key={trigger} timeout={250} classNames="fade">
      {children}
    </CSSTransition>
  </TransitionGroup>
);
