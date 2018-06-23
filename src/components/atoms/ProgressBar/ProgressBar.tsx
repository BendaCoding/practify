import * as React from 'react';
import * as S from './styled';

interface IProgressBarProps {
  progress: number;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ProgressBar: React.SFC<IProgressBarProps> =
({
  progress = 0,
  onClick = () => null,
}) => (
  <div className="progress" onClick={onClick}>
    <S.ProgressBar className="progress-bar" style={{width: `${progress}%`}} />
  </div>
);
