import * as React from 'react';
import { Beat, SubdivisionIndicator } from './components';
import { compose, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Metronome as MetronomeStore } from './store';
import { Dispatch, bindActionCreators } from 'redux';
import { AudioHandler } from './components/atoms/AudioHandler';
import { Practise } from 'practify/store';

const { actions, selectors } = MetronomeStore;

const Metronome = ({
  subdivisionsWithVolume = [],
  changeHandler,
  changeCompleteHandler,
  isRunning,
}: any) => (
  <div className="my-5">
    <h1>Metronome</h1>

    <AudioHandler
      isRunning={isRunning}
      bpm={60}
      subdivision={1}
    />

    <Beat>
      {subdivisionsWithVolume.map((volume: number, index: number) => (
        <SubdivisionIndicator
          volume={volume}
          onChange={changeHandler(index)}
          key={index}
        />
      ))}
    </Beat>
  </div>
)

const mapState = (state: IAppState) => ({
  subdivisionsWithVolume: selectors.getSubdivisionsWithVolume(state),
  bpm: selectors.getBpm(state),
  isRunning: Practise.selectors.getIsRunning(state),
});

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators({
    startMetronome: actions.startMetronome,
    stopMetronome: actions.stopMetronome,
    changeSubdivisionVolume: actions.changeSubdivisionVolume,
  }, dispatch);

export default compose(
  connect<any, any>(mapState, mapDispatch),
  withHandlers({
    changeHandler: ({ changeSubdivisionVolume }) => (index: number) =>
      (volume: number) => () => {
        if (volume < 4 && volume > -1) {
          changeSubdivisionVolume({ index, volume });
        }
      },
  }),
  lifecycle({
    componentDidMount() {
    
    },
  }),
)(Metronome);