import React from 'react';
import {
  Timer,
  SteppedProgressBar,
  Card,
  CountIn,
  Fade,
  H1,
  H2,
  PlaylistCards,
  ExerciseHeader,
} from 'practify/components';
import * as S from './styled';
import { Metronome } from 'practify/modules';
import { IPracticeScreenProps } from './PracticeScreen.container';
import { CoverCard } from '../../components/atoms/CoverCard';
import { Flex } from 'grid-styled';

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
  logExercise,
  selectExercise,
  exercises,
  playlist,
  selectedExerciseIndex,
  selectedExerciseId,
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
    logExercise({ exerciseId: selectedExerciseId, instrumentId: 'drums' });
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

      <S.AvatarArea>
        <CoverCard
          coverUrl={playlist!.coverUrl}
        />
      </S.AvatarArea>

      <S.HeadingArea>
        <ExerciseHeader
          title={exercise.name}
          playlist={playlist!}
        />
      </S.HeadingArea>

      <S.ExerciseArea>
        <Card>
          <img src="/img/sheet.jpg" style={{ width: '100%' }} />
        </Card>
      </S.ExerciseArea>

      <S.InfoArea>

        <Flex justifyContent="space-between">
          <p>128 bpm</p>
          <p>G Dur</p>
        </Flex>

        <Metronome />

      </S.InfoArea>

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
        
        <H2 mb={2}>{t('practice.aside.title')}</H2>

        <PlaylistCards
          isLoading={exercises.length === 0}
          exercises={exercises}
          selectExercise={selectExercise}
          selectedExerciseIndex={selectedExerciseIndex}
        />

      </S.Aside>

    </S.Screen>


  );
};
