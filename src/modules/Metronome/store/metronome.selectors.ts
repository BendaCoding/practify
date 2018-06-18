import { createSelector } from 'reselect';

export const getMetronomeState = (state: IAppState): IMetronomeState => state.metronome;

export const getBpm = createSelector(
  getMetronomeState,
  ({ bpm }) => bpm,
);

export const getSubdivisionsWithVolume = createSelector(
  getMetronomeState,
  ({ subdivisionsWithVolume }) => subdivisionsWithVolume,
);

export const getSubdivisions = createSelector(
  getMetronomeState,
  ({ subdivisionsWithVolume }) => subdivisionsWithVolume.length,
);

export const getIsRunning = createSelector(
  getMetronomeState,
  ({ isRunning }) => isRunning,
);

export const getTotalBeats = createSelector(
  getMetronomeState,
  ({ totalBeats }) => totalBeats,
);

export const getElapsedSubdivisions = createSelector(
  getMetronomeState,
  ({ elapsedSubdivisions }) => elapsedSubdivisions,
);

export const getBeatsAndSubdivisionsLeft = createSelector(
  [ getTotalBeats, getElapsedSubdivisions ],
  (a, b) => ({ a, b }),
);