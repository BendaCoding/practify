import { createStandardAction } from 'typesafe-actions';

export const addSubdivision = createStandardAction('metronome/ADD_SUBDIVISION')();

export const removeSubdivision = createStandardAction('metronome/REMOVE_SUBDIVISION')<
  number
>();

export const changeSubdivisionVolume = createStandardAction('metronome/CHANGE_SUBDIVISION_VOLUME')<
  IMetronomeChangeSubdivisionVolumePayload
>();

export const setPulse = createStandardAction('metronome/SET_PULSE')<
  number
>();

export const setBpm = createStandardAction('metronome/SET_BPM')<
  number
>();

export const startMetronome = createStandardAction('metronome/START_METRONOME')();

export const stopMetronome = createStandardAction('metronome/STOP_METRONOME')();
