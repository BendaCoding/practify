import React, { SFC } from 'react';
import { Box } from 'grid-styled';
import { Border, Wrapper } from './styled';

interface IPlaceholderProps {}

export const Placeholder: SFC<IPlaceholderProps> = () => (
  <Wrapper>
    <Border />
  </Wrapper>
);
