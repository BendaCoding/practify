declare interface IPlaylist {
  name: string;
  description: string;
  exercises: IExerciseReference[];
}

declare interface IExerciseReference {
  exerciseId: string;
  period: number; // length in seconds of how long to exercice
}