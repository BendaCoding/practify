import React, { SFC } from 'react';
import * as S from './styled';
import { Card, ProgressBar } from '../../atoms';
import { CommonProps, ResponsiveProp, Flex } from 'grid-styled';
import moment from 'moment';

export interface IOwnProps {
  name: string;
  onClick?: () => any;
  active?: boolean;
  progress?: number;
  timeLeft?: string;
  finished?: boolean;
}

type IExerciseCardProps = IOwnProps & CommonProps;

export const ExerciseCard: SFC<IExerciseCardProps> = ({
  name,
  onClick,
  progress,
  timeLeft = '',
  finished = false,
  color,
  active,
  ...rest
}) => {
  const clickHandler = onClick ? onClick : () => '';
  return (
    <S.Wrapper onClick={clickHandler} active={active} {...rest}>
      <Flex justifyContent="space-between">
        <S.CardTitle finished={finished}>{name}</S.CardTitle>
        <S.TimeLeft>{timeLeft !== '00:00' && timeLeft}</S.TimeLeft>
      </Flex>
      <ProgressBar progress={progress} />
    </S.Wrapper>
  );
}
