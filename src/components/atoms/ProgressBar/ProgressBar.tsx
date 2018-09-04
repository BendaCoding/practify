import React from 'react';
import * as S from './styled';

interface ProgressBarProps {
  progress?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ProgressBar: React.SFC<ProgressBarProps> =
({
  progress = 0,
  onClick = () => null,
}) => (
  <S.ProgressBar onClick={onClick}>
    <S.Filled noTransition={progress === 100 || progress === 0} style={{width: `${Math.min(Math.max(progress,0),100)}%`}} />
  </S.ProgressBar>
);
