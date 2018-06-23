import * as React from 'react';
import { ExerciseCard, Timer, Button } from 'practify/components';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Practise } from 'practify/store';
import * as S from './styled';
import { Metronome } from '../../modules';
import { Metronome as MetronomeStore } from '../../modules/Metronome/store'
import { PracticeScreen } from './PractiseScreen';
import { compose, lifecycle } from 'recompose';

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

interface IStateProps {
  selectedExerciseId: string | null; // TODO: shouldnt be nullable
  isRunning: boolean;
}

interface IDispatchProps {
  startExercise: () => any;
  stopExercise: () => any;
  startMetronome: () => any;
  stopMetronome: () => any;
  finishExercise: () => any;
  selectExercise: (exerciseId: string) => any;
}

export type IPractiseScreenProps = IStateProps & IDispatchProps;

export default compose(
  connect<IStateProps, IDispatchProps>(
    mapState,
    mapDispatch,
  ),
  lifecycle<IPractiseScreenProps, any>({
    componentWillUnmount() {
      this.props.stopExercise();
    },
  }),
)(PracticeScreen);
