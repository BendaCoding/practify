import React, { SFC } from 'react';
import * as S from './styled';
import { Card, ProgressBar } from '../../atoms';
import { CommonProps, ResponsiveProp } from 'grid-styled';

export interface IOwnProps {
  name: string;
  description: string;
  active?: boolean;
  onClick?: () => any;
  progress?: number;
}

type IExerciseCardProps = IOwnProps & CommonProps;

export const ExerciseCard: SFC<IExerciseCardProps> = ({
  name,
  description,
  active,
  onClick,
  progress,
  color,
  ...rest
}) => {
  const clickHandler = onClick ? onClick : () => '';
  return (
    <S.Card onClick={clickHandler} {...rest}>
      <S.CardTitle>{name}</S.CardTitle>
      <S.CardText>{description}</S.CardText>
      <ProgressBar progress={progress} />
    </S.Card>
  );
}