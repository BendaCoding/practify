// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';

export const getPlaylistsState = (state: AppState): IPlaylistsState => state.playlists;

export const isLoading = createSelector(
  [ getPlaylistsState ],
  ({ isLoading }) => isLoading, // tslint:disable
);

export const playlistEntities = createSelector(
  [ getPlaylistsState ],
  ({ playlists }) => playlists,
);

export const playlists = createSelector(
  [ playlistEntities ],
  (playlists) => Object.keys(playlists).map(id => ({ id, ...playlists[id] })),
);
