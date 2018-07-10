import * as React from 'react';
import * as S from './styled';
import { H1, H2, RatingStars } from '../../atoms';

export interface IExerciseHeaderProps {
  title: string;
  playlist: IPlaylist | IActivePlaylist;
}

export const ExerciseHeader: React.SFC<IExerciseHeaderProps> = ({
  title,
  playlist,
}) => {
  return (
    <S.Wrapper>
      <H1>{title}</H1>
      <H2>{playlist.name}</H2>
      <RatingStars
        rating={playlist.ratings.average}
      />
    </S.Wrapper>
  );
};
