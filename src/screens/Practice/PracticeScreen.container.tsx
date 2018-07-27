import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Practice, Exercises } from 'practify/store';
import { Metronome as MetronomeStore } from '../../modules/Metronome/store'
import { PracticeScreen } from './PracticeScreen';
import { compose, lifecycle } from 'recompose';
import { IExerciseWithPlaylistData } from '../../store/practice/types/IExerciseWithPlaylistData';
import { translate, InjectedTranslateProps } from 'react-i18next';

const mapState = (state: IAppState) => ({
  isRunning: Practice.selectors.isRunning(state),
  isCountInRunning: Practice.selectors.isCountInRunning(state),
  
  selectedExerciseIndex: Practice.selectors.selectedExerciseIndex(state),
  selectedExerciseId: Practice.selectors.selectedExerciseId(state),
  selectedExerciseElapsed: Practice.selectors.selectedExerciseElapsed(state),
  selectedExercisePeriod: Practice.selectors.selectedExercisePeriod(state),
  shouldTriggerCountIn: Practice.selectors.shouldTriggerCountIn(state),
  bpm: MetronomeStore.selectors.getBpm(state),
  beatCount: MetronomeStore.selectors.getBeatCount(state),
  exercises: Practice.selectors.exercisesForPlaylist(state),
  playlist: Practice.selectors.selectedPlaylist(state),
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
    loadExercises: Exercises.actions.loadExercisesRequest,
    loadPlaylist: Practice.actions.loadPlaylist,
  },
  dispatch,
);

interface IStateProps {
  isRunning: boolean;
  isCountInRunning: boolean;
  shouldTriggerCountIn: boolean;
  
  selectedExerciseIndex: number;
  selectedExerciseId: string;
  selectedExerciseElapsed: number;
  selectedExercisePeriod: number;
  
  bpm: number;
  beatCount: number;
  exercises: IExerciseWithPlaylistData[];
  playlist: IActivePlaylist | null;
}

interface IDispatchProps {
  startCountIn: typeof Practice.actions.startCountIn;
  stopCountIn: typeof Practice.actions.stopCountIn;
  startExercise: typeof Practice.actions.startExercise;
  stopExercise: typeof Practice.actions.stopExercise;
  exerciseTick: typeof Practice.actions.exerciseTick;
  finishExercise: typeof Practice.actions.finishExercise;
  startMetronome: typeof MetronomeStore.actions.startMetronome;
  stopMetronome: typeof MetronomeStore.actions.stopMetronome;
  loadExercises: typeof Exercises.actions.loadExercisesRequest;
  selectExercise: typeof Practice.actions.selectExercise;
}

export type IPracticeScreenProps = IStateProps & IDispatchProps & InjectedTranslateProps;

export default compose(
  translate(),
  connect<IStateProps, IDispatchProps>(
    mapState,
    mapDispatch,
  ),
  lifecycle<IPracticeScreenProps, any>({
    componentWillUnmount() {
      this.props.stopExercise();
    },
    componentDidMount() {
      this.props.loadExercises();

    },
  }),
)(PracticeScreen);
