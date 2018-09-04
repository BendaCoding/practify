import { ExerciseReference } from '../../../typings/index';

export interface ExerciseReferenceWithTracking extends ExerciseReference {
  elapsed: number;
  active?: boolean;
  finished: boolean;
}
