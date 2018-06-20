// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';

export const getExercisesState = (state: IAppState): IExercisesState => state.exercises;

export const isLoading = createSelector(
  [ getExercisesState ],
  ({ isLoading }) => isLoading, // tslint:disable
);

export const exercises = createSelector(
  [ getExercisesState ],
  ({ exercises }) => exercises,
);
