import { fork, all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { exercisesSaga } from './exercises';
import { playlistsSaga } from './playlists';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(exercisesSaga),
    fork(playlistsSaga),
  ]);
}