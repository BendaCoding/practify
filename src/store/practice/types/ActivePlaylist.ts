import { ExerciseReferenceWithTracking } from './ExerciseReferenceWithTracking';
import { Playlist } from './../../../typings';

export interface ActivePlaylist extends Playlist {
  exercises: ExerciseReferenceWithTracking[];
  finished: boolean;
};
