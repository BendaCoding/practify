// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';

export const practiceState = (state: IAppState): IPracticeState => state.practice;

export const selectedExerciseIndex = createSelector(
  [ practiceState ],
  ({ selectedExerciseIndex }): IPracticeState['selectedExerciseIndex'] => selectedExerciseIndex,
);

export const isRunning = createSelector(
  [ practiceState ],
  ({ isRunning }): boolean => isRunning,
);

export const isCountInRunning = createSelector(
  [ practiceState ],
  ({ isCountInRunning }): boolean => isCountInRunning,
);

export const playlist = createSelector(
  [ practiceState ],
  ({ playlist }): IPracticeState['playlist'] => playlist,
);

export const selectedExerciseElapsed = createSelector(
  [ playlist, selectedExerciseIndex ],
  (playlist, index) => playlist ? playlist.exercises[index].elapsed : 0,
);

export const shouldTriggerCountIn = createSelector(
  [ selectedExerciseElapsed ],
  (elapsed) => !elapsed,
);
