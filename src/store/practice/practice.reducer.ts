import { loadPlaylist, selectExercise, startExercise, stopExercise, finishExercise, exerciseTick, startCountIn, stopCountIn, finishPlaylist } from './practice.actions';
import { Action } from 'redux';
import { createReducer } from '../create-reducer';
import { PracticeState } from './types';

export const initialState: PracticeState = {
  selectedExerciseIndex: 0,
  isRunning: false,
  isCountInRunning: false,
  playlist: {
    name: 'Phil\'s Phrygian Phantasies',
    description: 'Don\'t even ask ....',
    id: 'asd2f2',
    coverUrl: 'https://firebasestorage.googleapis.com/v0/b/practify-b68c5.appspot.com/o/images%2Fplaylists%2FYTTyp9B05det6VWulM0l%2Fcover.jpg?alt=media&token=ecca62c5-808e-4f45-83c9-d2d3826f019f',
    finished: false,
    ratings: {
      average: 3.5,
      count: 14,
    },
    exercises: [
      { exerciseId: 'A9iFOgEKRjLJEDAhbBgv', period: 5, elapsed: 0, finished: false },
      { exerciseId: 'RF1hijgMHZS163iK6Iq3', period: 4, elapsed: 0, finished: false },
      { exerciseId: 'GDuZrgmhGDzHyiLpfrvA', period: 4, elapsed: 0, finished: false },
    ],
  },
};

export const practiceReducer: any = createReducer(initialState, {
  loadPlaylist,
  selectExercise,
  startExercise,
  startCountIn,
  stopCountIn,
  exerciseTick,
  stopExercise,
  finishExercise,
  finishPlaylist,
})({
  loadPlaylist: (state: PracticeState, { payload }): PracticeState => {
    return { ...state, playlist: payload };
  },

  selectExercise: (state: PracticeState, { payload }): PracticeState => {
    return {
      ...state,
      isRunning: false,
      isCountInRunning: false,
      selectedExerciseIndex: payload === state.selectedExerciseIndex
        ? state.selectedExerciseIndex
        : payload,
    };
  },
  startExercise: (state: PracticeState, action: Action): PracticeState => {
    const { selectedExerciseIndex, playlist } = state;
    if (!playlist) {
      return state;
    }
    const selectedExercise = playlist.exercises[selectedExerciseIndex];
    const { period, elapsed } = selectedExercise;
    return {
      ...state,
      isRunning: true,
      isCountInRunning: false,
      playlist: {
        ...playlist,
        exercises: [
          ...playlist.exercises.slice(0, selectedExerciseIndex),
          {
            ...selectedExercise,
            elapsed: elapsed >= period ? 0 : elapsed,
          },
          ...playlist.exercises.slice(selectedExerciseIndex + 1),
        ],
      }
    };
  },

  exerciseTick: (state: PracticeState, action: Action): PracticeState => {
    const { selectedExerciseIndex, playlist } = state;
    if (!playlist) {
      return state;
    }
    const selectedExercise = playlist.exercises[selectedExerciseIndex];
    return {
      ...state,
      playlist: {
        ...playlist,
        exercises: [
          ...playlist.exercises.slice(0, selectedExerciseIndex),
          {
            ...selectedExercise,
            elapsed: selectedExercise.elapsed + 1,
          },
          ...playlist.exercises.slice(selectedExerciseIndex + 1),
        ],
      },
    };
  },
  stopExercise: (state: PracticeState, action: Action): PracticeState => {
    return { ...state, isRunning: false };
  },
  finishExercise: (state: PracticeState, action: Action): PracticeState => {
    const { selectedExerciseIndex, playlist } = state;
    if (!playlist) {
      return state;
    }
    const selectedExercise = playlist.exercises[selectedExerciseIndex];
    return {
      ...state,
      isRunning: false,
      playlist: {
        ...playlist,
        exercises: [
          ...playlist.exercises.slice(0, selectedExerciseIndex),
          {
            ...selectedExercise,
            finished: true,
          },
          ...playlist.exercises.slice(selectedExerciseIndex + 1),
        ],
      }
    };
  },
  finishPlaylist: (state: PracticeState, action: Action): PracticeState => {
    return {
      ...state,
      playlist: {
        ...state.playlist!,
        finished: true,
      }
    };
  },
  startCountIn: (state: PracticeState): PracticeState => {
    return { ...state, isCountInRunning: true };
  },
  stopCountIn: (state: PracticeState): PracticeState => {
    return { ...state, isCountInRunning: false };
  },
});
