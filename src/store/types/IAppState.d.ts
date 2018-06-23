declare interface IAppState {
  auth: IAuthState;
  practise: IPractiseState;
  exercises: IExercisesState;
  playlists: IPlaylistsState;
  metronome: IMetronomeState;
  router: IRouterState;
}