import { loadPlaylistsRequest, loadPlaylistsSuccess, loadPlaylistsFail } from './playlists.actions';
import { createReducer } from '../create-reducer';
import { PlaylistsState } from './types';

export const initialState: PlaylistsState = {
  isLoading: false,
  playlists: [],
};

export const playlistsReducer =  createReducer(initialState, {
  loadPlaylistsRequest,
  loadPlaylistsSuccess,
  loadPlaylistsFail,
})({
  loadPlaylistsRequest: state => {
    return {
      ...state,
      isLoading: true,
    }
  },
  loadPlaylistsSuccess: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      playlists: payload,
    }
  },
  loadPlaylistsFail: state => {
    return state;
  },
});
