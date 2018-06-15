declare interface IPractiseState {
  selectedExerciseId: string | null;
  isRunning: boolean;
  playlist: Array<IExercise>;
}