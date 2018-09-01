import React, { SFC } from 'react';
import { CoverCardProps, CoverCard } from '../../atoms/CoverCard/CoverCard';
import * as S from './styled';



export const CoverCardWithLabel: SFC<any> = ({ children, backdrop, ...rest }) => (
  <S.Wrapper {...rest}>
    <S.Content>
      {children}
    </S.Content>
   {backdrop && <S.Backdrop />}
  </S.Wrapper>
);
