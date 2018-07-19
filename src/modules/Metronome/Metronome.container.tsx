import { compose, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Metronome as MetronomeStore } from './store';
import { Dispatch, bindActionCreators } from 'redux';
import { Practice } from 'practify/store';
import { Metronome } from './Metronome';

const { actions, selectors } = MetronomeStore;

const mapState = (state: IAppState) => ({
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
  
export interface IStateProps {
  bpm: number;
  isRunning: boolean;
  beatsWithVolume: number[];
  subdivision: number;
  beatCount: number;
  currentBeat: number;
}

export interface IDispatchProps {
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

export interface IOwnProps {
  changeHandler: (index: number) => (volume: number) => any;
}

export type IMetronomeProps = IStateProps & IDispatchProps & IOwnProps;

export default compose(
  connect<IStateProps, IDispatchProps, IOwnProps>(mapState, mapDispatch),
  withHandlers({
    changeHandler: ({ changeBeatVolumeAtIndex }) => (index: number) =>
      (volume: number) => () => {
        if (volume >= 0 && volume <= 4) {
          changeBeatVolumeAtIndex({ index, volume });
        }
      },
  }),
  lifecycle<IMetronomeProps, any>({
    componentWillUnmount() {
      this.props.stopMetronome();
    },
  }),
)(Metronome);
