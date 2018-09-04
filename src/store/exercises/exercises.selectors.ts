// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';
import { ExercisesState } from './types/ExercisesState';
import { AppState } from '../types/index';

export const getExercisesState = (state: AppState): ExercisesState => state.exercises;

export const isLoading = createSelector(
  [ getExercisesState ],
  ({ isLoading }) => isLoading, // tslint:disable
);

export const exerciseEntities = createSelector(
  [ getExercisesState ],
  ({ exercises }) => {
    return exercises ? exercises : []
  }
);

export const exercises = createSelector(
  [ exerciseEntities ],
  (exercises) => Object.keys(exercises).map((id: string) => ({ id, ...exercises[id] }))
);
