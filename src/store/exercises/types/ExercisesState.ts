import { LoadExercisesResponse } from './LoadExercisesResponse';

export interface ExercisesState {
  isLoading: boolean;
  exercises: LoadExercisesResponse;
}
