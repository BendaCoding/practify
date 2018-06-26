import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Practice } from 'practify/store';
import { Metronome as MetronomeStore } from '../../modules/Metronome/store'
import { PracticeScreen } from './PracticeScreen';
import { compose, lifecycle } from 'recompose';

const mapState = (state: IAppState) => ({
  isRunning: Practice.selectors.isRunning(state),
  isCountInRunning: Practice.selectors.isCountInRunning(state),
  selectedExerciseIndex: Practice.selectors.selectedExerciseIndex(state),
  elapsed: Practice.selectors.selectedExerciseElapsed(state),
  shouldTriggerCountIn: Practice.selectors.shouldTriggerCountIn(state),
  bpm: MetronomeStore.selectors.getBpm(state),
  beatCount: MetronomeStore.selectors.getBeatCount(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    startCountIn: Practice.actions.startCountIn,
    stopCountIn: Practice.actions.stopCountIn,
    startExercise: Practice.actions.startExercise,
    exerciseTick: Practice.actions.exerciseTick,
    stopExercise: Practice.actions.stopExercise,
    startMetronome: MetronomeStore.actions.startMetronome,
    stopMetronome: MetronomeStore.actions.stopMetronome,
    finishExercise: Practice.actions.finishExercise,
    selectExercise: Practice.actions.selectExercise,
  },
  dispatch,
);

interface IStateProps {
  isRunning: boolean;
  isCountInRunning: boolean;
  selectedExerciseIndex: number;
  elapsed: number;
  shouldTriggerCountIn: boolean;
  bpm: number;
  beatCount: number;
}

interface IDispatchProps {
  startCountIn: () => any;
  stopCountIn: () => any;
  startExercise: () => any;
  exerciseTick: () => any;
  stopExercise: () => any;
  startMetronome: () => any;
  stopMetronome: () => any;
  finishExercise: () => any;
  selectExercise: (exerciseIndex: number) => any;
}

export type IPracticeScreenProps = IStateProps & IDispatchProps;

export default compose(
  connect<IStateProps, IDispatchProps>(
    mapState,
    mapDispatch,
  ),
  lifecycle<IPracticeScreenProps, any>({
    componentWillUnmount() {
      this.props.stopExercise();
    },
  }),
)(PracticeScreen);
