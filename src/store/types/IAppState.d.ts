declare interface AppState {
  auth: IAuthState;
  practice: PracticeState;
  exercises: IExercisesState;
  playlists: IPlaylistsState;
  metronome: IMetronomeState;
  router: IRouterState;
}