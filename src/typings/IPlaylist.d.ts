declare interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  ratings: {
    average: number;
    count: number;
  }
  exercises: ExerciseReference[];
}

declare interface ExerciseReference {
  exerciseId: string;
  period: number; // length in seconds of how long to exercice
}