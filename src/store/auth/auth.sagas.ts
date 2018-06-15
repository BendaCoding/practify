// tslint:disable
import { call, put, fork, take, takeEvery } from 'redux-saga/effects';
import { rsFire } from 'practify/firebase';
import { getType } from 'typesafe-actions';
import { userLoginRequest, userLoginSuccess, userLoginFail, userLoginSync } from './auth.actions';
import { push } from 'connected-react-router'
import { routes } from 'practify/common';

function * userLoginSaga({ payload: { email, password }}: any) {
  try {
    yield call(rsFire.auth.signInWithEmailAndPassword, email, password);
    yield [
      put(userLoginSuccess()),
      put(push(routes.practise))
    ];
  } catch (error) {
    yield [
      put(userLoginFail(error)),
      put(push(routes.home))
    ]
  }
}

// function * userLogoutSaga() {
//   try {
//     const data = yield call(rsFire.auth.signOut)
//     yield put(logoutSuccess(data))
//   } catch (error) {
//     yield put(logoutFailure(error))
//   }
// }

function * userSyncSaga() {
  const channel = yield call(rsFire.auth.channel);

  while(true) {
    const { error, user } = yield take(channel);

    if (user) {
      yield put(userLoginSync(user));
    } else {
      yield put(userLoginFail(error));
    }
  }
}

export function * authSaga () {
  yield fork(userSyncSaga)
  yield [
    takeEvery((getType(userLoginRequest) as any), (userLoginSaga as any)),
    // takeEvery(types.LOGOUT.REQUEST, logoutSaga)
  ]
}