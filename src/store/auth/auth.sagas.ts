import { facebookAuthProvider, googleAuthProvider } from './../../firebase/index';
import { call, all, put, fork, take, takeEvery } from 'redux-saga/effects';
import { rsFire } from 'practify/firebase';
import { getType } from 'typesafe-actions';
import { push } from 'connected-react-router'
import { userLoginRequest, userLoginSuccess, userLoginFail, userLoginSync, userLogoutSuccess,
  userLogoutFail, userLogoutRequest, userRegisterSuccess, userRegisterFail, userRegisterRequest, userOAuthRequest } from './auth.actions';
import { routes } from 'practify/common';

function * userLoginSaga({ payload: { email, password }}: IPayload<IAuthLoginRequest>) {
  try {
    yield call(rsFire.auth.signInWithEmailAndPassword, email, password);
    yield all([
      put(userLoginSuccess()),
      put(push(routes.practice)),
    ]);
  } catch (error) {
    yield all([
      put(userLoginFail(error)),
      put(push(routes.home)),
    ])
  }
}

function * userLogoutSaga() {
  try {
    yield call(rsFire.auth.signOut);
    yield all([
      put(userLogoutSuccess()),
      put(push(routes.home)),
    ])
  } catch (error) {
    yield all([
      put(userLogoutFail(error)),
      put(push(routes.home)),
    ])
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



function * userRegisterSaga({ payload: { email, password, ...rest }}: IPayload<IAuthRegisterRequest>) {
  try {
    const data = yield call(rsFire.auth.createUserWithEmailAndPassword, email, password);

    yield call(
      rsFire.firestore.setDocument,
      `users/${data.user.uid}`,
      rest,
    );

    yield all([
      put(userRegisterSuccess()),
      put(push(routes.browse)),
    ]);
  } catch (error) {
    yield all([
      put(userRegisterFail(error)),
      put(push(routes.home)),
    ]);
  }
}

function* userOAuthSaga({ payload }: IPayload<IAuthLinkRequest>) {
  try {
    const authProvider = payload === 'facebook' ? facebookAuthProvider : googleAuthProvider;
    const data = yield call(rsFire.auth.signInWithPopup, authProvider);
    yield put(userOAuthRequest(data));
  } catch(error) {
    yield put(userLoginFail(error));
  }
}

export function * authSaga () {
  yield fork(userSyncSaga)
  yield all([
    takeEvery((getType(userLoginRequest) as any), userLoginSaga as any),
    takeEvery((getType(userLogoutRequest) as any), userLogoutSaga as any),
    takeEvery((getType(userRegisterRequest) as any), userRegisterSaga as any),
    takeEvery((getType(userOAuthRequest) as any), userOAuthSaga as any),
  ]);
}