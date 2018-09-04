import { ExerciseReferenceWithTracking } from './ExerciseReferenceWithTracking';
import { Playlist } from './../../../typings';

export interface ActivePlaylist extends Omit<Playlist, 'exercises'> {
  exercises: ExerciseReferenceWithTracking[];
  finished: boolean;
}
