import { loadPlaylist, selectExercise, startExercise, stopExercise, finishExercise } from './practise.actions';
import { Action } from 'redux';
import { createReducer } from '../../store/create-reducer';

export const initialState: IPractiseState = {
  selectedExerciseId: null,
  isRunning: false,
  playlist: [],
};

export const practiseReducer: any = createReducer(initialState, {
  loadPlaylist,
  selectExercise,
  startExercise,
  stopExercise,
  finishExercise,
})({
  loadPlaylist: (state: IPractiseState, { payload }): IPractiseState => {
    return { ...state, playlist: payload };
  },

  selectExercise: (state: IPractiseState, { payload} ): IPractiseState => {
    return { ...state, selectedExerciseId: payload };
  },
  startExercise: (state: IPractiseState, action: Action): IPractiseState => {
    return { ...state, isRunning: true };
  },
  stopExercise: (state: IPractiseState, action: Action): IPractiseState => {
    return { ...state, isRunning: false };
  },
  finishExercise: (state: IPractiseState, action: Action): IPractiseState => {
    return { ...state, isRunning: false };
  },
});
