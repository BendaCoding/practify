import React from 'react';
import * as S from './styled';

interface TagProps {
  color?: keyof ThemeInterface['infoPalette'];
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
