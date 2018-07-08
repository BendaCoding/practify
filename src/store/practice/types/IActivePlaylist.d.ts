declare interface IActivePlaylist extends IPlaylist {
  exercises: IExerciseReferenceWithTracking[];
  finished: boolean;
}

interface IExerciseReferenceWithTracking extends IExerciseReference {
  elapsed: number;
  active?: boolean;
  finished: boolean;
}