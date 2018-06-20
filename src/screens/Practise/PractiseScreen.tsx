import * as React from 'react';
import { ExerciseCard, Timer, Button } from 'practify/components';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Practise } from 'practify/store';
import * as S from './styled';
import { Metronome } from '../../modules';
import { Metronome as MetronomeStore } from '../../modules/Metronome/store'

const mapState = (state: IAppState) => ({
  selectedExerciseId: Practise.selectors.getSelectedExerciseId(state),
  isRunning: Practise.selectors.getIsRunning(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    startExercise: Practise.actions.startExercise,
    stopExercise: Practise.actions.stopExercise,
    startMetronome: MetronomeStore.actions.startMetronome,
    stopMetronome: MetronomeStore.actions.stopMetronome,
    finishExercise: Practise.actions.finishExercise,
    selectExercise: Practise.actions.selectExercise,
  },
  dispatch,
);

interface IPractiseScreenProps {
  selectedExerciseId: string;
  isRunning: boolean;
  startExercise: () => any;
  stopExercise: () => any;
  startMetronome: () => any;
  stopMetronome: () => any;
  finishExercise: () => any;
  selectExercise: (exerciseId: string) => any;
}

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

export default connect(
  mapState,
  mapDispatch,
)(PracticeScreen);
