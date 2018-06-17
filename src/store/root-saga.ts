import { fork, all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { exercisesSaga } from './exercises';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(exercisesSaga),
  ]);
}