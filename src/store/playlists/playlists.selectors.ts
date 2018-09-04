import { PlaylistsState } from './types/PlaylistsState';
import { AppState } from './../types/AppState';
import { createSelector } from 'reselect';

// tslint:disable: no-shadowed-variable
export const getPlaylistsState = (state: AppState): PlaylistsState => state.playlists;

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
