import React from 'react';
import * as S from './styled';

export interface PanelProps {
  active: boolean;
  onClick: () => void;
}

export const Panel: React.SFC<PanelProps> = ({
  active = false,
  onClick,
  children
}) => {
  return (
    <S.Wrapper>
      <S.Backdrop onClick={onClick} active={active} />
      <S.Panel active={active}>
        <S.Content>{children}</S.Content>
      </S.Panel>
    </S.Wrapper>
  );
};
