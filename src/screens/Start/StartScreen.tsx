import * as React from "react";
import { Container, Fade } from "practify/components";
import { withState, withHandlers, compose } from 'recompose';

export const StartScreen: React.SFC<any> = () => (
  <Container>
    <h1>For you</h1>
    <h1>Recently practiced</h1>
  </Container>
);
