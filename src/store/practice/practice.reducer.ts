import { loadPlaylist, selectExercise, startExercise, stopExercise, finishExercise, exerciseTick, startCountIn, stopCountIn } from './practice.actions';
import { Action } from 'redux';
import { createReducer } from '../../store/create-reducer';
import { get } from 'lodash';

export const initialState: IPracticeState = {
  selectedExerciseIndex: 0,
  isRunning: false,
  isCountInRunning: false,
  playlist: {
    name: 'Phil\'s Phrygian Phantasies',
    description: 'Don\'t even ask ....' ,
    exercises: [
      { exerciseId: 'A9iFOgEKRjLJEDAhbBgv', period: 50, elapsed: 0 },
      { exerciseId: 'RF1hijgMHZS163iK6Iq3', period: 40, elapsed: 0 },
      { exerciseId: 'GDuZrgmhGDzHyiLpfrvA', period: 35, elapsed: 0 },
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
})({
  loadPlaylist: (state: IPracticeState, { payload }): IPracticeState => {
    return { ...state, playlist: payload };
  },

  selectExercise: (state: IPracticeState, { payload} ): IPracticeState => {
    return {
      ...state,
      isRunning: false,
      isCountInRunning: false,
      selectedExerciseIndex: payload,
    };
  },
  startExercise: (state: IPracticeState, action: Action): IPracticeState => {
    return { ...state, isRunning: true, isCountInRunning: false };
  },
  
  exerciseTick: (state: IPracticeState, action: Action): IPracticeState => {
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
  stopExercise: (state: IPracticeState, action: Action): IPracticeState => {
    return { ...state, isRunning: false };
  },
  finishExercise: (state: IPracticeState, action: Action): IPracticeState => {
    return { ...state, isRunning: false };
  },
  startCountIn: (state: IPracticeState): IPracticeState => {
    return { ...state, isCountInRunning: true };
  },
  stopCountIn: (state: IPracticeState): IPracticeState => {
    return { ...state, isCountInRunning: false };
  },
});
