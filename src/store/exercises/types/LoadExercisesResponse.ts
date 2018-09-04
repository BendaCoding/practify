import { Exercise } from './Exercise';

export interface LoadExercisesResponse {
  [id: string]: Exercise;
}
