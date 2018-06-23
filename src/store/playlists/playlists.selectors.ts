// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';

export const getPlaylistsState = (state: IAppState): IPlaylistsState => state.playlists;

export const isLoading = createSelector(
  [ getPlaylistsState ],
  ({ isLoading }) => isLoading, // tslint:disable
);

export const playlists = createSelector(
  [ getPlaylistsState ],
  ({ playlists }) => playlists,
);
