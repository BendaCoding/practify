import React, { SFC } from 'react';
import * as S from './styled';

export const CoverCardWithHoverContent: SFC<any> = ({ children, ...rest }) => (
  <S.Wrapper {...rest}>
    <S.Content>
      {children}
    </S.Content>
    <S.Backdrop />
  </S.Wrapper>
);
