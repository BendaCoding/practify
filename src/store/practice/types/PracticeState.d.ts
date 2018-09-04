declare interface PracticeState {
  isRunning: boolean;
  isCountInRunning: boolean;
  selectedExerciseIndex: number;
  playlist: ActivePlaylist | null;
}
