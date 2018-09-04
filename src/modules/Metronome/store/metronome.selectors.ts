import { MetronomeState } from './types/MetronomeState';
import { AppState } from './../../../store/types/AppState';
import { createSelector } from 'reselect';

export const getMetronomeState = (state: AppState): MetronomeState => state.metronome;

export const getBpm = createSelector(
  getMetronomeState,
  ({ bpm }) => bpm,
);

export const getIsRunning = createSelector(
  getMetronomeState,
  ({ isRunning }) => isRunning,
);

export const getBeatsWithVolume = createSelector(
  getMetronomeState,
  ({ beatsWithVolume }) => beatsWithVolume,
);

export const getCurrentBeat = createSelector(
  getMetronomeState,
  ({ currentBeat }) => currentBeat,
);

export const getBeatCount = createSelector(
  getMetronomeState,
  ({ beatsWithVolume }) => beatsWithVolume.length,
);


export const getSubdivision = createSelector(
  getMetronomeState,
  ({ subdivision }) => subdivision,
);

export const getTotalMeasures = createSelector(
  getMetronomeState,
  ({ totalMeasures }) => totalMeasures,
);

export const getElapsedSubdivisions = createSelector(
  getMetronomeState,
  ({ elapsedSubdivisions }) => elapsedSubdivisions,
);

export const getBeatsAndSubdivisionsLeft = createSelector(
  [ getTotalMeasures, getElapsedSubdivisions ],
  (a, b) => ({ a, b }),
);
