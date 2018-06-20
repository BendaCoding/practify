import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Metronome as MetronomeStore } from './store';
import { Dispatch, bindActionCreators } from 'redux';
import { Practise } from 'practify/store';
import { Metronome } from './Metronome';

const { actions, selectors } = MetronomeStore;

export interface IStateProps {
  bpm: number;
  isRunning: boolean;
  beatsWithVolume: number[];
  subdivision: number;
  beatCount: number;
}

export interface IDispatchProps {
  startMetronome: () => void;
  stopMetronome: () => void;
  addBeat: () => void;
  removeBeat: (index: number) => void;
  incrementSubdivision: () => void;
  decrementSubdivision: () => void;
}

export interface IOwnProps {
  changeHandler: (index: number) => (volume: number) => any;
}

export type IMetronomeProps = IStateProps & IDispatchProps & IOwnProps;

const mapState = (state: IAppState) => ({
  beatsWithVolume: selectors.getSubdivisionsWithVolume(state),
  beatCount: selectors.getBeatCount(state),
  subdivision: selectors.getSubdivision(state),
  bpm: selectors.getBpm(state),
  isRunning: Practise.selectors.getIsRunning(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    startMetronome: actions.startMetronome,
    stopMetronome: actions.stopMetronome,
    changeSubdivisionVolume: actions.changeSubdivisionVolume,
    addBeat: actions.addBeat,
    removeBeat: actions.removeBeat,
    incrementSubdivision: actions.incrementSubdivision,
    decrementSubdivision: actions.decrementSubdivision,
  }, dispatch);

export default compose(
  connect<IStateProps, IDispatchProps, IOwnProps>(mapState, mapDispatch),
  withHandlers({
    changeHandler: ({ changeSubdivisionVolume }) => (index: number) =>
      (volume: number) => () => {
        if (volume < 4 && volume > -1) {
          changeSubdivisionVolume({ index, volume });
        }
      },
  }),
)(Metronome);