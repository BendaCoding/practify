import * as actions from './playlists.actions';
import * as selectors from './playlists.selectors';
import { playlistsReducer as reducer } from './playlists.reducer';

export default reducer;

export * from './playlists.sagas';

export const Playlists = {
  actions,
  reducer,
  selectors,
}