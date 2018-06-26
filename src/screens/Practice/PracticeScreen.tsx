import * as React from 'react';
import { ExerciseCard, Timer, Button, SteppedProgressBar, ExerciseDescriptionCard, CountIn, Fade } from 'practify/components';
import * as S from './styled';
import { Metronome } from '../../modules';
import { IPracticeScreenProps } from './PracticeScreen.container';

export const PracticeScreen: React.SFC<IPracticeScreenProps> = ({
  selectedExerciseIndex,
  isRunning,
  isCountInRunning,
  bpm,
  beatCount,
  startCountIn,
  stopCountIn,
  startExercise,
  exerciseTick,
  stopExercise,
  shouldTriggerCountIn,
  startMetronome,
  stopMetronome,
  finishExercise,
  selectExercise,
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
    finishExercise();
    stopMetronome();
  };
  
  const stopCountInAndMetronome = () => {
    stopCountIn();
    stopMetronome();
  }
  
  const onTimerClick =
    shouldTriggerCountIn
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
  }

  return (
    <S.Screen>
      <S.Md>
        <S.Content>
          <h1>Single Stroke Roll</h1>
          
          <Timer
            time={55}
            isRunning={isRunning}
            onFinish={finish}
            onClick={onTimerClick}
            onEverySecond={exerciseTick}
          />

          <Metronome />

          {
            isCountInRunning &&
            <Fade>
              <CountIn
                beatCount={beatCount}
                interval={60000 / bpm}
                onFinish={startExerciseFromCountIn}
              />
            </Fade>
          }

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

          <Button type="success" onClick={startExercise} label="Start" />

          <Button
            type="warning"
            onClick={stopExercise}
            label="Stop"
            className="ml-2"
          />
        </S.Aside>
      </S.Md>
      {/* @TODO: Merge this into one markup, not separated */}
      <S.Sm>
        <S.Content>
          <SteppedProgressBar steps={6} progress={3} />
          <ExerciseDescriptionCard bpm={128} mKey="G Dur">srthzdfrtj</ExerciseDescriptionCard>
          <S.Desc>
            This is a descriptive Text pertaining to the Exercise. Do as I say!!
          </S.Desc>
          {/* <Timer
            time={55}
            isRunning={isRunning}
            onFinish={finish}
            onClick={isRunning ? stop : start}
            size={120}
            strokeWidth={7}
          /> */}
        </S.Content>
      </S.Sm>
    </S.Screen>
  );
}
