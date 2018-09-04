import React from 'react';
import * as S from './styled';
import { range } from 'lodash';

export interface SteppedProgressBarProps {
  steps: number;
  progress: number;
  onClick?: (step: number) => void;
}

export const SteppedProgressBar: React.SFC<SteppedProgressBarProps> = ({
  steps,
  progress,
  onClick,
}) => {
  const handleClick = onClick ? (step: number) => () => onClick(step) : null;
  return (
    <S.Bar>
      {range(0, steps).map(step => (
        <S.Split onClick={handleClick} key={step} active={step < progress} />
      ))}
    </S.Bar>
  );
};
