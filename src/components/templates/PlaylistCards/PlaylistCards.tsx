import React, { SFC } from 'react';
import { Flex } from 'grid-styled';
import { translate, InjectedTranslateProps } from 'react-i18next';
import { IExerciseWithPlaylistData } from '../../../store/practice/types/IExerciseWithPlaylistData';
import { ExerciseCard } from '../../molecules';
import { withLoader } from 'practify/hocs';
import { compose } from 'recompose';
import { IWithLoaderProps } from '../../../hocs/withLoader/withLoader';

interface IOuterProps extends IWithLoaderProps {
  exercises: IExerciseWithPlaylistData[];
  selectExercise: any;
  selectedExerciseIndex: number;
}

type IInnerProps = IOuterProps & InjectedTranslateProps;

export const PlaylistCards: SFC<IInnerProps> = ({ t, exercises, selectExercise, selectedExerciseIndex }) => {
  const clickHandler = (index: number) => () => selectExercise(index);

  return (
      <Flex flexDirection="column">
        {exercises.map((ex: IExerciseWithPlaylistData, index: number) => (
          <ExerciseCard
            name={ex.name}
            mb={3}
            progress={ex.progress}
            timeLeft={ex.timeLeft}
            finished={ex.finished}
            onClick={clickHandler(index)}
            active={index === selectedExerciseIndex}
            key={ex.name}
          />
        ))}
      </Flex>
  );
};

export default compose<IInnerProps, IOuterProps>(
  translate(),
  withLoader(),
)(PlaylistCards);
