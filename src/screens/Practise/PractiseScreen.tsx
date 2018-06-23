import * as React from 'react';
import { ExerciseCard, Timer, Button } from 'practify/components';
import * as S from './styled';
import { Metronome } from '../../modules';
import { IPractiseScreenProps } from './PractiseScreen.container';

export const PracticeScreen: React.SFC<IPractiseScreenProps> = ({
  selectedExerciseId,
  isRunning,
  startExercise,
  stopExercise,
  startMetronome,
  stopMetronome,
  finishExercise,
  selectExercise,
}) => {
  
  const start = () => {
    startExercise();
    startMetronome();
  }

  const stop = () => {
    stopExercise();
    stopMetronome();
  }

  const finish = () => {
    finishExercise();
    stopMetronome();
  }

  return (
    <S.Screen>

      <S.Content>
        <h1>Single Stroke Roll</h1>

        <Timer
          time={55}
          isRunning={isRunning}
          onFinish={finish}
          onClick={isRunning ? stop : start}
        />

        <Metronome />

      </S.Content>

      <S.Aside>

        <ExerciseCard
          name="Single Stroke Roll"
          desc="a brief teaser"
          _id="1"
          active={true}
          onClick={selectExercise}
        />

        <ExerciseCard
          name="Double Stroke Roll"
          desc="a brief teaser"
          _id="2"
          onClick={selectExercise}
        />

        <Button type="success" onClick={startExercise}
        label="Start" />

        <Button type="warning" onClick={stopExercise} label="Stop" className="ml-2" />

      </S.Aside>

    </S.Screen>
  );
}
