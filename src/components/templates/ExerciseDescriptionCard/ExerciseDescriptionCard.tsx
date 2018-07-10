import * as React from 'react';
import * as S from './styled';
import { Card } from '../../atoms/Card';

export interface IOwnProps {
  bpm?: number;
  mKey?: string;
}

export const ExerciseDescriptionCard: React.SFC<IOwnProps> = props => {
  return (
    <S.Wrapper>
      <Card>{props.children}</Card>
      <S.Info>
      <S.Bpm>{props.bpm} bpm</S.Bpm>
      <S.mKey>{props.mKey}</S.mKey>
      </S.Info>
    </S.Wrapper>
  );
};
