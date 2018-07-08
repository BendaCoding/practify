import { loadPlaylistsRequest, loadPlaylistsSuccess, loadPlaylistsFail } from './playlists.actions';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import { rsf } from 'practify/firebase';
import { getType } from 'typesafe-actions';

function * loadPlaylistsSaga() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'playlists');
    let playlists: any;
    snapshot.forEach((playlist: any) => {
      playlists = {
        ...playlists,
        [playlist.id]: {
          id: playlist.id,
          ...playlist.data(),
        },
      }
    })
    yield all([
      put(loadPlaylistsSuccess(playlists)),
    ]);
  } catch (error) {
    yield all([
      put(loadPlaylistsFail(error)),
    ])
  }
}

export function * playlistsSaga () {
  yield all([
    takeEvery((getType(loadPlaylistsRequest) as any), loadPlaylistsSaga as any),
  ]);
}