import { compose, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Metronome as MetronomeStore } from './store';
import { Dispatch, bindActionCreators } from 'redux';
import { Practice, AppState } from 'practify/store';
import { Metronome } from './Metronome';

const { actions, selectors } = MetronomeStore;

const mapState = (state: AppState) => ({
  isRunning: Practice.selectors.isRunning(state) || Practice.selectors.isCountInRunning(state),
  beatsWithVolume: selectors.getBeatsWithVolume(state),
  beatCount: selectors.getBeatCount(state),
  subdivision: selectors.getSubdivision(state),
  bpm: selectors.getBpm(state),
  currentBeat: selectors.getCurrentBeat(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    startMetronome: actions.startMetronome,
    stopMetronome: actions.stopMetronome,
    changeBeatVolumeAtIndex: actions.changeBeatVolumeAtIndex,
    addBeat: actions.addBeat,
    removeBeat: actions.removeBeat,
    incrementSubdivision: actions.incrementSubdivision,
    decrementSubdivision: actions.decrementSubdivision,
    setSubdivision: actions.setSubdivision,
    tick: actions.tick,
    setBpm: actions.setBpm,
  }, dispatch);
  
export interface StateProps {
  bpm: number;
  isRunning: boolean;
  beatsWithVolume: number[];
  subdivision: number;
  beatCount: number;
  currentBeat: number;
}

export interface DispatchProps {
  startMetronome: () => void;
  stopMetronome: () => void;
  addBeat: () => void;
  removeBeat: (index: number) => void;
  incrementSubdivision: () => void;
  decrementSubdivision: () => void;
  setSubdivision: (subdivision: number) => void;
  tick: () => void;
  setBpm: (bpm: number) => void;
}

export interface OwnProps {
  changeHandler: (index: number) => (volume: number) => any;
}

export type MetronomeProps = StateProps & DispatchProps & OwnProps;

export default compose(
  connect<StateProps, DispatchProps, OwnProps>(mapState, mapDispatch),
  withHandlers({
    changeHandler: ({ changeBeatVolumeAtIndex }) => (index: number) =>
      (volume: number) => () => {
        if (volume >= 0 && volume <= 4) {
          changeBeatVolumeAtIndex({ index, volume });
        }
      },
  }),
  lifecycle<MetronomeProps, any>({
    componentWillUnmount() {
      this.props.stopMetronome();
    },
  }),
)(Metronome);
