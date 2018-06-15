import { getType } from 'typesafe-actions';
import { loadExercises } from './exercises.actions';

export const initialState: IExercisesState = {
  exercises: [],
};

export const exercisesReducer = (state = {}, action: any) => {
  switch (action.type) {
    case getType(loadExercises):
      return {
        ...state,
        exercises: action.exercises,
      };
    default:
      return state;
  }
};
