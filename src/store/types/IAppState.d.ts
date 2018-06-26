declare interface IAppState {
  auth: IAuthState;
  practice: IPracticeState;
  exercises: IExercisesState;
  playlists: IPlaylistsState;
  metronome: IMetronomeState;
  router: IRouterState;
}