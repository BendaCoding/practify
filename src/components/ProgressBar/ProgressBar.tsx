import * as React from 'react';
import { RangedNumber } from './progress.interface';
import * as S from './styled';

interface IProgressBarProps {
  progress: number;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ProgressBar: React.SFC<IProgressBarProps> =
({
  progress: currentProgress = 0,
  className = '',
  onClick = () => null,
}) => {
  const progress = new RangedNumber();
  progress.setValue(currentProgress);

  return (
    <div className="progress" onClick={onClick}>
      <S.ProgressBar className="progress-bar" style={{width: `${progress.getValue()}%`}} />
    </div>
  );
};
