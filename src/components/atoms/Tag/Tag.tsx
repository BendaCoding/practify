import React from 'react';
import * as S from './styled';

interface TagProps {
  color?: keyof Theme['infoPalette'];
  label: string;
}

export const Tag: React.SFC<TagProps> = ({
  label,
  color = 'color1',
  children,
}) => (
  <S.Badge color={color}>
    {label}
    {children}
  </S.Badge>
);
