import { effects } from 'redux-saga';
import { authSaga } from './auth';

const allSagas = [
  effects.call(authSaga),
];

export default function* rootSaga() {
  yield effects.all(allSagas);
}