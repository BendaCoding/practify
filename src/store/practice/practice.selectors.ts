import { IExerciseWithPlaylistData } from './types/IExerciseWithPlaylistData';
import moment from 'moment';
// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';
import { Exercises } from '../exercises';
import { set, get, isEmpty } from 'lodash';

export const practiceState = (state: AppState): IPracticeState => state.practice;

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

export const selectedPlaylist = createSelector(
  [ practiceState ],
  ({ playlist }): IPracticeState['playlist'] => playlist,
);

export const selectedPlaylistId = createSelector(
  [ selectedPlaylist ],
  (playlist): string => playlist!.id || '',
);

export const selectedExerciseId = createSelector(
  [ selectedPlaylist, selectedExerciseIndex ],
  (playlist, selectedExerciseIndex) => get(playlist, `exercises[${selectedExerciseIndex}].exerciseId`)
);

export const selectedExercise = createSelector(
  [ selectedExerciseId, Exercises.selectors.exercises ],
  (id, exercises) => exercises && id && exercises[id],
);

export const selectedExerciseElapsed = createSelector(
  [ selectedPlaylist, selectedExerciseIndex ],
  (playlist, index) => playlist ? playlist.exercises[index].elapsed : 0,
);

export const selectedExercisePeriod = createSelector(
  [ selectedPlaylist, selectedExerciseIndex ],
  (playlist, index) => playlist ? playlist.exercises[index].period : 0,
);

export const shouldTriggerCountIn = createSelector(
  [ selectedExerciseElapsed ],
  (elapsed) => !elapsed,
);

export const exercisesForPlaylist = createSelector(
  [ selectedPlaylist, Exercises.selectors.exerciseEntities, selectedExerciseIndex ],
  (playlist, allExercises, selectedExerciseIndex) => playlist && !isEmpty(playlist) && !isEmpty(allExercises)
    ? playlist.exercises.map((exerciseReference, index) => {
        const exercise = allExercises[exerciseReference.exerciseId];
        const progress = exerciseReference.elapsed / exerciseReference.period * 100;
        const timeLeft = moment.unix(exerciseReference.period - exerciseReference.elapsed).format('mm:ss');
        const finished = exerciseReference.finished;
        const exerciseWithPlaylistData: IExerciseWithPlaylistData = {
          ...exercise,
          active: selectedExerciseIndex === index,
          progress,
          timeLeft,
          finished,
        }
        return exerciseWithPlaylistData;
      })
    : [],
);
