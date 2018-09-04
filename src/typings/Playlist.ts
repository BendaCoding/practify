import { ExerciseReference } from './ExerciseReference';

export interface Playlist {
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
