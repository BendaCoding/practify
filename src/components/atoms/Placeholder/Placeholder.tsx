import React, { SFC } from 'react';
import { Box } from 'grid-styled';
import { Border, Wrapper } from './styled';

/**
 * A square Placeholder with dashed borderto signal that a card or similar component should go here
 */
export const Placeholder: SFC<{}> = () => (
  <Wrapper>
    <Border />
  </Wrapper>
);
