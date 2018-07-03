import { fork, all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { exercisesSaga } from './exercises';
import { playlistsSaga } from './playlists';
import { practiceSaga } from './practice';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(exercisesSaga),
    fork(playlistsSaga),
    fork(practiceSaga),
  ]);
}