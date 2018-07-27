import { createStandardAction } from 'typesafe-actions';

export const loadExercisesRequest = createStandardAction('SAGA_EVENT - exercises/LOAD_EXERCISES')();

export const loadExercisesSuccess = createStandardAction('exercises/LOAD_EXERCISES_SUCCESS')<ILoadExercisesResponse>();

export const loadExercisesFail = createStandardAction('exercises/LOAD_EXERCISES_FAIL')<
  IApiErrorResponse
>();
