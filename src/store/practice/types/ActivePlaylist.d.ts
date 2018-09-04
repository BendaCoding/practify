declare interface ActivePlaylist extends Playlist {
  exercises: ExerciseReferenceWithTracking[];
  finished: boolean;
}

interface ExerciseReferenceWithTracking extends ExerciseReference {
  elapsed: number;
  active?: boolean;
  finished: boolean;
}