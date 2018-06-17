import { call, all, put, fork, take, takeEvery } from 'redux-saga/effects';
import { rsFire } from 'practify/firebase';
import { getType } from 'typesafe-actions';
import { push } from 'connected-react-router'
import { userLoginRequest, userLoginSuccess, userLoginFail, userLoginSync, userLogoutSuccess,
  userLogoutFail, userLogoutRequest, userRegisterSuccess, userRegisterFail, userRegisterRequest } from './auth.actions';
import { routes } from 'practify/common';

function * userLoginSaga({ payload: { email, password }}: IPayload<IAuthLoginRequest>) {
  try {
    yield call(rsFire.auth.signInWithEmailAndPassword, email, password);
    yield [
      put(userLoginSuccess()),
      put(push(routes.practise)),
    ];
  } catch (error) {
    yield [
      put(userLoginFail(error)),
      put(push(routes.home)),
    ]
  }
}

function * userLogoutSaga() {
  try {
    yield call(rsFire.auth.signOut);
    yield [
      put(userLogoutSuccess()),
      put(push(routes.home)),
    ]
  } catch (error) {
    yield [
      put(userLogoutFail(error)),
      put(push(routes.home)),
    ]
  }
}

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

function * userRegisterSaga({ payload: { email, password }}: IPayload<IAuthLoginRequest>) {
  try {
    yield call(rsFire.auth.createUserWithEmailAndPassword(email, password));
    yield [
      put(userRegisterSuccess()),
      put(push(routes.practise)),
    ];
  } catch (error) {
    yield [
      put(userRegisterFail(error)),
      put(push(routes.home)),
    ]
  }
}

export function * authSaga () {
  yield fork(userSyncSaga)
  yield all([
    takeEvery((getType(userLoginRequest) as any), userLoginSaga as any),
    takeEvery((getType(userLogoutRequest) as any), userLogoutSaga as any),
    takeEvery((getType(userRegisterRequest) as any), userRegisterSaga as any),
  ]);
}