import { createStandardAction } from 'typesafe-actions';
import { ActivePlaylist } from './types/index';

export const loadPlaylist = createStandardAction('practice/LOAD_PLAYLIST')<ActivePlaylist>();

export const selectExercise = createStandardAction('practice/SELECT_EXERCISE')<number>();

export const startExercise = createStandardAction('practice/START_EXERCISE')();

export const stopExercise = createStandardAction('practice/STOP_EXERCISE')();

export const finishExercise = createStandardAction('practice/FINISH_EXERCISE')();

export const exerciseTick = createStandardAction('practice/EXERCISE_TICK')();

export const startCountIn = createStandardAction('practice/START_COUNT_IN')();

export const stopCountIn = createStandardAction('practice/STOP_COUNT_IN')();

export const finishPlaylist = createStandardAction('practice/FINISH_PLAYLIST')();
