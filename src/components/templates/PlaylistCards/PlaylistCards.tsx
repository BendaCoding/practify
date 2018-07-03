import React, { SFC, Fragment } from "react";
import { Flex } from "grid-styled";
import { H2 } from "../../atoms";
import { translate, InjectedTranslateProps } from "react-i18next";
import { IExerciseWithPlaylistData } from "../../../store/practice/types/IExerciseWithPlaylistData";
import * as S from './styled';

interface IOwnProps {
  exercises: IExerciseWithPlaylistData[];
  selectExercise: any;
  selectedExerciseIndex: number;
}

type IPlaylistCards = IOwnProps & InjectedTranslateProps;

export const PlaylistCards: SFC<IPlaylistCards> = ({ t, exercises, selectExercise, selectedExerciseIndex }) => {
  const clickHandler = (index: number) => () => selectExercise(index);

  return (
    <Fragment>
      <H2 mb={2}>{t("practice.aside.title")}</H2>

      <Flex flexDirection="column">
        {exercises.map((ex: IExerciseWithPlaylistData, index: number) => (
          <S.ExerciseCard
            name={ex.name}
            description={ex.description}
            mb={3}
            progress={ex.progress}
            onClick={clickHandler(index)}
            active={index === selectedExerciseIndex}
            key={ex.name}
          />
        ))}
      </Flex>
    </Fragment>
  );
};

export default translate()(PlaylistCards);
