import React, { SFC } from "react";
import { ICoverCardProps, CoverCard } from "../../atoms/CoverCard/CoverCard";
import * as S from './styled';

export const CoverCardWithLabel: SFC<any> = ({ children, ...rest }) => (
  <S.Wrapper {...rest}>
    <S.Content>
      {children}
    </S.Content>
    <S.Backdrop />
  </S.Wrapper>
);
