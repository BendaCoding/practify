import { startMetronome, stopMetronome, addBeat, removeBeat,
  changeBeatVolumeAtIndex, tick, setBpm,
  incrementSubdivision, decrementSubdivision } from './metronome.actions';
import { createReducer } from '../../../store/create-reducer';

export const initialState: IMetronomeState = {
  bpm: 86,
  isRunning: false,
  beatsWithVolume: [4, 1, 3, 1],
  currentBeat: 0,
  subdivision: 4,
  totalMeasures: 40,
  elapsedSubdivisions: 0,
};

export const metronomeReducer = createReducer(initialState, {
  addBeat,
  removeBeat,
  incrementSubdivision,
  decrementSubdivision,
  changeBeatVolumeAtIndex,
  tick,
  setBpm,
  startMetronome,
  stopMetronome,
})({
  addBeat: state => {
    if (state.beatsWithVolume.length >= 32) {
      return state;
    }
    return {
      ...state,
      beatsWithVolume: state.beatsWithVolume.concat(2),
    }
  },
  removeBeat: (state, { payload }) => {
    if (state.beatsWithVolume.length <= 1) {
      return state;
    }
    return {
      ...state,
      beatsWithVolume: [
        ...state.beatsWithVolume.slice(0, payload),
        ...state.beatsWithVolume.slice(payload + 1),
      ],
    }
  },
  incrementSubdivision: state => {
    const { subdivision } = state;
    return {
      ...state,
      subdivision: subdivision < 32 ? state.subdivision + 1 : subdivision,
    }
  },
  decrementSubdivision: state => {
    const { subdivision } = state;
    return {
      ...state,
      subdivision: subdivision > 1 ? state.subdivision - 1 : subdivision,
    }
  },
  changeBeatVolumeAtIndex: (state, { payload }) => {
    return {
      ...state,
      beatsWithVolume: [
        ...state.beatsWithVolume.slice(0, payload.index),
        payload.volume,
        ...state.beatsWithVolume.slice(payload.index + 1),
      ],
    }
  },
  tick: (state) => {
    const { currentBeat, beatsWithVolume } = state;
    const nextBeat = currentBeat < beatsWithVolume.length
      ? currentBeat + 1
      : 1;

    return {
      ...state,
      currentBeat: nextBeat,
    }
  },
  setBpm: (state, { payload }) => {
    if (payload < 20 || payload > 300) {
      return state;
    }
    return {
      ...state,
      bpm: payload,
    }
  },
  startMetronome: state => {
    return {
      ...state,
      isRunning: true,
    }
  },
  stopMetronome: state => {
    return {
      ...state,
      isRunning: false,
      currentBeat: 0,
    }
  },
});
