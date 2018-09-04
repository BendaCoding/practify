import { loadExercisesRequest, loadExercisesSuccess } from './exercises.actions';
import { createReducer } from '../create-reducer';
import { ExercisesState } from './types';

export const initialState: ExercisesState = {
  isLoading: false,
  exercises: {},
};

export const exercisesReducer =  createReducer(initialState, {
  loadExercisesRequest,
  loadExercisesSuccess,
})({
  loadExercisesRequest: state => {
    return {
      ...state,
      isLoading: true,
    }
  },
  loadExercisesSuccess: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      exercises: payload,
    }
  },
});
