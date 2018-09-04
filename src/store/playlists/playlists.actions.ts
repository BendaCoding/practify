import { createStandardAction } from 'typesafe-actions';
import { LoadPlaylistsRequest } from './types/LoadPlaylistsRequest';

export const loadPlaylistsRequest = createStandardAction('SAGA_EVENT - playlists/LOAD_PLAYLISTS')();

export const loadPlaylistsSuccess = createStandardAction('playlists/LOAD_PLAYLISTS_SUCCESS')<
  LoadPlaylistsRequest
>();

export const loadPlaylistsFail = createStandardAction('playlists/LOAD_PLAYLISTS_FAIL')<
  ApiErrorResponse
>();
