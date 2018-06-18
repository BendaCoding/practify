import { setPulse, startMetronome, stopMetronome, addSubdivision, removeSubdivision, changeSubdivisionVolume, setBpm } from './metronome.actions';
import { createReducer } from '../../../store/create-reducer';

export const initialState: IMetronomeState = {
  bpm: 86,
  subdivisionsWithVolume: [3, 1, 2, 1],
  pulse: 4,
  isRunning: false,
  totalBeats: 40,
  elapsedSubdivisions: 0,
};

export const metronomeReducer = createReducer(initialState, {
  addSubdivision,
  removeSubdivision,
  changeSubdivisionVolume,
  setPulse,
  setBpm,
  startMetronome,
  stopMetronome,
})({
  addSubdivision: state => {
    return {
      ...state,
      subdivisionsWithVolume: state.subdivisionsWithVolume.concat(2),
    }
  },
  removeSubdivision: (state, { payload }) => {
    return {
      ...state,
      subdivisionsWithVolume: [
        ...state.subdivisionsWithVolume.slice(0, payload),
        ...state.subdivisionsWithVolume.slice(payload + 1),
      ],
    }
  },
  changeSubdivisionVolume: (state, { payload }) => {
    return {
      ...state,
      subdivisionsWithVolume: [
        ...state.subdivisionsWithVolume.slice(0, payload.index),
        payload.volume,
        ...state.subdivisionsWithVolume.slice(payload.index + 1),
      ],
    }
  },
  setPulse: (state, { payload }) => {
    return {
      ...state,
      pulse: payload,
    }
  },
  setBpm: (state, { payload }) => {
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
    }
  },
});
