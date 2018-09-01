// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';

export const getExercisesState = (state: AppState): IExercisesState => state.exercises;

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
