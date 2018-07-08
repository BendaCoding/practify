declare interface IPlaylist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  ratings: {
    average: number;
    count: number;
  }
  exercises: IExerciseReference[];
}

declare interface IExerciseReference {
  exerciseId: string;
  period: number; // length in seconds of how long to exercice
}