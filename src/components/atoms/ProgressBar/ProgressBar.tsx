import * as React from 'react';
import * as S from './styled';

interface IProgressBarProps {
  progress?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ProgressBar: React.SFC<IProgressBarProps> =
({
  progress = 0,
  onClick = () => null,
}) => (
  <S.ProgressBar onClick={onClick}>
    <S.Filled noTransition={progress === 100 || progress === 0} style={{width: `${progress}%`}} />
  </S.ProgressBar>
);
