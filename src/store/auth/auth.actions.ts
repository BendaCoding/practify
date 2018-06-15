import { createStandardAction } from 'typesafe-actions';

export const userLoginRequest = createStandardAction('SAGA_EVENT - auth/USER_LOGIN_REQUEST')<
  IAuthLoginRequest
>();

export const userLoginSuccess = createStandardAction('auth/USER_LOGIN_SUCCESS')();

export const userLoginFail = createStandardAction('auth/USER_LOGIN_FAIL')<
 IApiErrorResponse
>();

export const userLoginSync = createStandardAction('auth/USER_LOGIN_SYNC')<
 IUser | null
>();