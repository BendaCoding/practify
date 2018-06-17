import * as React from 'react';
import { Beat, SubdivisionIndicator } from './components';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Metronome as MetronomeStore } from './store';
import { Dispatch, bindActionCreators } from 'redux';

const { actions, selectors } = MetronomeStore;

const Metronome = ({ subdivisionsWithVolume = [], changeHandler }: any) => (
  <div className="my-5">
    <h1>Metronome</h1>
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
      (volume: number) => changeSubdivisionVolume({ index, volume }),
  }),
)(Metronome);