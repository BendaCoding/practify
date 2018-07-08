export interface IExerciseWithPlaylistData extends IExercise {
  active: boolean;
  progress: number;
  timeLeft: string;
  finished: boolean;
}