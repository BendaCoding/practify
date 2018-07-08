import { getBeatsWithVolume } from '../metronome.selectors';
import { addBeat, removeBeat, incrementSubdivision,
  decrementSubdivision, tick, changeBeatVolumeAtIndex, setBpm, startMetronome, stopMetronome } from '../metronome.actions';
import { metronomeReducer, initialState } from '../metronome.reducer';
import { assign, dropRight } from 'lodash';

describe('metronomeReducer', () => {

  it('should exist and return the initialState', () => {
    const reducer = metronomeReducer(undefined, { type: 'RANDOM'});
    expect(reducer).toBeDefined();
    expect(reducer).toEqual(initialState);
  });

  it('should handle ADD_BEAT', () => {
    const reducer = metronomeReducer(undefined, addBeat());
    const beatsWithVolume = initialState.beatsWithVolume.concat(2);
    const expectedState = assign({}, initialState, { beatsWithVolume });
    expect(reducer).toEqual(expectedState);
  });

  it('should handle REMOVE_BEAT with last item as index', () => {
    const { beatsWithVolume } = initialState;
    const lastIndex = beatsWithVolume.length - 1;
    const reducer = metronomeReducer(undefined, removeBeat(lastIndex));
    const expectedBeatsWithVolume = dropRight(beatsWithVolume, 1);
    const expectedState = assign({}, initialState, { beatsWithVolume: expectedBeatsWithVolume });
    expect(reducer).toEqual(expectedState);
  });

  it('should handle REMOVE_BEAT with middle item as index', () => {
    const { beatsWithVolume } = initialState;
    const index = Math.floor(beatsWithVolume.length / 2);
    const reducer = metronomeReducer(undefined, removeBeat(index));
    const expectedBeatsWithVolume = [
      ...beatsWithVolume.slice(0, index),
      ...beatsWithVolume.slice(index + 1),
    ];
    const expectedState = assign({}, initialState, { beatsWithVolume: expectedBeatsWithVolume });
    expect(reducer).toEqual(expectedState);
  });
  
  it('should handle INCREMENT_SUBDIVISION', () => {
    const reducer = metronomeReducer(undefined, incrementSubdivision());
    const expectedState = assign({}, initialState, { subdivision: initialState.subdivision + 1 });
    expect(reducer).toEqual(expectedState);
  });
  
  it('should handle INCREMENT_SUBDIVISION for a max of 32', () => {
    const newInitialState = assign({}, initialState, { subdivision: 32 });
    const reducer = metronomeReducer(newInitialState, incrementSubdivision());
    const expectedState = assign({}, initialState, { subdivision: 32 });
    expect(reducer).toEqual(expectedState);
  });
  
  it('should handle DECREMENT_SUBDIVISION', () => {
    const reducer = metronomeReducer(undefined, decrementSubdivision());
    const expectedState = assign({}, initialState, { subdivision: initialState.subdivision - 1 });
    expect(reducer).toEqual(expectedState);
  });

  it('should handle DECREMENT_SUBDIVISION for a min of 1', () => {
    const newInitialState = assign({}, initialState, { subdivision: 1 });
    const reducer = metronomeReducer(newInitialState, decrementSubdivision());
    const expectedState = assign({}, initialState, { subdivision: 1 });
    expect(reducer).toEqual(expectedState);
  });

  it('should handle CHANGE_BEAT_VOLUME_AT_INDEX', () => {
    const payload = { index: 1, volume: 4 };
    const reducer = metronomeReducer(initialState, changeBeatVolumeAtIndex(payload));
    const expectedBeats = [
      ...initialState.beatsWithVolume.slice(0, payload.index),
      payload.volume,
      ...initialState.beatsWithVolume.slice(payload.index + 1),
    ];
    const expectedState = assign({}, initialState, { beatsWithVolume: expectedBeats });
    expect(reducer).toEqual(expectedState);
  });

  it('should handle TICK', () => {
    const { beatsWithVolume, currentBeat } = initialState;
    const reducer = metronomeReducer(initialState, tick());
    const expectedState = assign({}, initialState, { currentBeat: currentBeat + 1 });
    expect(reducer).toEqual(expectedState);
  });
  
  it('should handle TICK for last beat', () => {
    const { beatsWithVolume, currentBeat } = initialState;
    const totalBeats = beatsWithVolume.length;
    const newInitialState = assign({}, initialState, { currentBeat: totalBeats })
    const reducer = metronomeReducer(initialState, tick());
    const expectedState = assign({}, initialState, { currentBeat: 1 });
    expect(reducer).toEqual(expectedState);
  });

  it('should handle SET_BPM', () => {
    const reducer = metronomeReducer(initialState, setBpm(120));
    const expectedState = assign({}, initialState, { bpm: 120 });
    expect(reducer).toEqual(expectedState);
  });
  
  it('should handle START_METRONOME and STOP_METRONOME', () => {
    const startState = metronomeReducer(initialState, startMetronome());
    const expectedState = assign({}, initialState, { isRunning: true });
    expect(startState).toEqual(expectedState);
    
    const stopState = metronomeReducer(startState, stopMetronome());
    expect(stopState).toEqual(initialState);
  });

});
