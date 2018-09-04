import { createStandardAction } from 'typesafe-actions';
import { LoadExercisesResponse } from './types';
import { ApiErrorResponse } from '../../typings/index';

export const loadExercisesRequest = createStandardAction('SAGA_EVENT - exercises/LOAD_EXERCISES')();

export const loadExercisesSuccess = createStandardAction('exercises/LOAD_EXERCISES_SUCCESS')<LoadExercisesResponse>();

export const loadExercisesFail = createStandardAction('exercises/LOAD_EXERCISES_FAIL')<
  ApiErrorResponse
>();
