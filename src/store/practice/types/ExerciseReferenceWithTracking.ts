export interface ExerciseReferenceWithTracking extends ExerciseReference {
  elapsed: number;
  active?: boolean;
  finished: boolean;
}