import { createStandardAction } from 'typesafe-actions';

export const loadPlaylist = createStandardAction('practise/LOAD_PLAYLIST')<
  PractiseLoadPlaylistPayload
>();

export const selectExercise = createStandardAction('practise/SELECT_EXERCISE')<
  string
>();

export const startExercise = createStandardAction('practise/START_EXERCISE')();

export const stopExercise = createStandardAction('practise/STOP_EXERCISE')();

export const finishExercise = createStandardAction('practise/FINISH_EXERCISE')();
