import { createStandardAction } from 'typesafe-actions';

export const addBeat = createStandardAction('metronome/ADD_BEAT')();

export const removeBeat = createStandardAction('metronome/REMOVE_BEAT')<
  number
>();

export const incrementSubdivision = createStandardAction('metronome/INCREMENT_SUBDIVISION')();

export const decrementSubdivision = createStandardAction('metronome/DECREMENT_SUBDIVISION')();

export const changeSubdivisionVolume = createStandardAction('metronome/CHANGE_SUBDIVISION_VOLUME')<
  IMetronomeChangeSubdivisionVolumePayload
>();


export const setBpm = createStandardAction('metronome/SET_BPM')<
  number
>();

export const startMetronome = createStandardAction('metronome/START_METRONOME')();

export const stopMetronome = createStandardAction('metronome/STOP_METRONOME')();
