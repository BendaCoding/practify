// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';
import { Exercises } from '../exercises';
import { set, isEmpty } from 'lodash';

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

export const selectedExerciseId = createSelector(
  [ playlist, selectedExerciseIndex ],
  (playlist, selectedExerciseIndex) => selectedExerciseIndex && playlist
    ? playlist[selectedExerciseIndex].exerciseId
    : '',
);

export const selectedExercise = createSelector(
  [ selectedExerciseId, Exercises.selectors.exercises ],
  (id, exercises) => exercises && id && exercises[id],
);

export const selectedExerciseElapsed = createSelector(
  [ playlist, selectedExerciseIndex ],
  (playlist, index) => playlist ? playlist.exercises[index].elapsed : 0,
);

export const selectedExercisePeriod = createSelector(
  [ playlist, selectedExerciseIndex ],
  (playlist, index) => playlist ? playlist.exercises[index].period : 0,
);

export const shouldTriggerCountIn = createSelector(
  [ selectedExerciseElapsed ],
  (elapsed) => !elapsed,
);

export const exercisesForPlaylist = createSelector(
  [ playlist, Exercises.selectors.exerciseEntities, selectedExerciseIndex ],
  (playlist, allExercises, selectedExerciseIndex) => playlist && !isEmpty(playlist) && !isEmpty(allExercises)
    ? playlist.exercises.map((exercise, index) => ({
        ...allExercises[exercise.exerciseId],
        active: selectedExerciseIndex === index,
      }))
    : [],
);
