import { AuthState } from './../auth/types/AuthState';
import { PracticeState } from './../practice/types/PracticeState';
import { ExercisesState } from './../exercises/types';
import { PlaylistsState } from './../playlists/types/PlaylistsState';
import { MetronomeState } from './../../modules/Metronome/store/types/MetronomeState';
import { RouterState } from './RouterState';

export interface AppState {
  auth: AuthState;
  practice: PracticeState;
  exercises: ExercisesState;
  playlists: PlaylistsState;
  metronome: MetronomeState;
  router: RouterState;
}
