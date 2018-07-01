declare interface IActivePlaylist extends Pick<IPlaylist, 'name' | 'description'> {
  exercises: IExerciseReferenceWithTracking[];
}

interface IExerciseReferenceWithTracking extends IExerciseReference {
  elapsed: number;
  active?: boolean;
}