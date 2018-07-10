import * as React from 'react';
import * as S from './styled';

interface ITagProps {
  color?: keyof ITheme['infoPalette'];
  label: string;
}

export const Tag: React.SFC<ITagProps> = ({
  label,
  color = 'color1',
  children,
}) => (
  <S.Badge color={color}>
    {label}
    {children}
  </S.Badge>
);
