import React from "react";
import {
  Timer,
  SteppedProgressBar,
  Card,
  CountIn,
  Fade,
  H1,
  H2,
  Hidden,
  PlaylistCards,
} from "practify/components";
import * as S from "./styled";
import { Metronome } from "practify/modules";
import { IPracticeScreenProps } from "./PracticeScreen.container";



export const PracticeScreen: React.SFC<IPracticeScreenProps> = ({
  t,
  isRunning,
  isCountInRunning,
  shouldTriggerCountIn,
  bpm,
  beatCount,
  startCountIn,
  stopCountIn,
  startExercise,
  stopExercise,
  exerciseTick,
  startMetronome,
  stopMetronome,
  finishExercise,
  selectExercise,
  exercises,
  playlist,
  selectedExerciseIndex,
  selectedExerciseElapsed,
  selectedExercisePeriod,
}) => {
  const start = () => {
    startExercise();
    startMetronome();
  };

  const stop = () => {
    stopExercise();
    stopMetronome();
  };

  const finish = () => {
    stopMetronome();
    finishExercise();
  };

  const stopCountInAndMetronome = () => {
    stopCountIn();
    stopMetronome();
  };

  const onTimerClick = shouldTriggerCountIn
    ? !isCountInRunning
      ? startCountIn
      : stopCountInAndMetronome
    : !isRunning
      ? start
      : stop;

  const startExerciseFromCountIn = () => {
    if (isCountInRunning) {
      start();
    }
  };
  
  const exercise = exercises[selectedExerciseIndex] || {};

  return (
    <S.Screen>
  
      <SteppedProgressBar steps={6} progress={3} />

      <S.Avatar />

      <S.Heading>
        <H1>{exercise.name}</H1>
        <H2>{playlist!.name}</H2>
      </S.Heading>

      <S.ExerciseCard>
        <Card>
          <img src="/img/sheet.jpg" style={{ width: "100%" }} />
        </Card>
      </S.ExerciseCard>

      <S.Info>
        <p>128 bpm</p>
        <p>G Dur</p>
      </S.Info>

      <S.Description>{exercise.description}</S.Description>

      <S.TransportControls>
        <Timer
          time={selectedExercisePeriod}
          elapsed={selectedExerciseElapsed}
          timerId={selectedExerciseIndex}
          isRunning={isRunning}
          onFinish={finish}
          onClick={onTimerClick}
          onEverySecond={exerciseTick}
          size={120}
          strokeWidth={4}
        />
        
        <Hidden>
          <Metronome/>
        </Hidden>

        {isCountInRunning && (
          <Fade>
            <CountIn
              beatCount={beatCount}
              interval={60000 / bpm}
              onFinish={startExerciseFromCountIn}
            />
          </Fade>
        )}
      </S.TransportControls>
      
      <S.Aside>
        
        <PlaylistCards
          exercises={exercises}
          selectExercise={selectExercise}
          selectedExerciseIndex={selectedExerciseIndex}
        />

      </S.Aside>

    </S.Screen>


  );
};
