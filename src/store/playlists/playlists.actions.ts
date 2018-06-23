import { createStandardAction } from 'typesafe-actions';

export const loadPlaylistsRequest = createStandardAction('SAGA_EVENT - playlists/LOAD_PLAYLISTS')();

export const loadPlaylistsSuccess = createStandardAction('playlists/LOAD_PLAYLISTS_SUCCESS')<
  ILoadPlaylistsRequest
>();

export const loadPlaylistsFail = createStandardAction('playlists/LOAD_PLAYLISTS_FAIL')<
  IApiErrorResponse
>();
