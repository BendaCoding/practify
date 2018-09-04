import React from 'react';
import * as S from './styled';
import { H1, H2 } from '../../atoms';
import { RatingStars } from '../../molecules';
import { ActivePlaylist } from 'practify/store';
import { Playlist } from '../../../typings';

export interface ExerciseHeaderProps {
  title: string;
  playlist: Playlist | ActivePlaylist;
}

export const ExerciseHeader: React.SFC<ExerciseHeaderProps> = ({
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
