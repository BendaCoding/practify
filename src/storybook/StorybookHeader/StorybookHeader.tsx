import React, { SFC } from 'react';
import { PractifyTypo, H3 } from 'practify/components';
import { Flex } from 'grid-styled';
import * as S from './styled';

export const StorybookHeader: SFC<{}> = () => (
  <S.Wrapper>
    <PractifyTypo color="#48515A" />
    <H3 ml={2} pt={1} style={{ fontWeight: 200 }}>UI Library</H3>
  </S.Wrapper>
)
