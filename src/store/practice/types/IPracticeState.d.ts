declare interface IPracticeState {
  isRunning: boolean;
  isCountInRunning: boolean;
  selectedExerciseIndex: number;
  playlist: IActivePlaylist | null;
}
