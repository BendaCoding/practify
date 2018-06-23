import { createStandardAction } from 'typesafe-actions';

/**
 * Login Actions
 */
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

/**
 * Logout Actions
 */
export const userLogoutRequest = createStandardAction('auth/USER_LOGOUT_REQUEST')();

export const userLogoutSuccess = createStandardAction('auth/USER_LOGOUT_SUCCESS')();

export const userLogoutFail = createStandardAction('auth/USER_LOGOUT_FAIL')<
  IApiErrorResponse
>();

/**
 * Register Actions
 */
export const userRegisterRequest = createStandardAction('SAGA_EVENT - auth/USER_REGISTER_REQUEST')<
  IAuthRegisterRequest
>();

export const userRegisterSuccess = createStandardAction('auth/USER_REGISTER_SUCCESS')();

export const userRegisterFail = createStandardAction('auth/USER_REGISTER_FAIL')<
  IApiErrorResponse
>();

export const userOAuthRequest = createStandardAction('auth/USER_O_AUTH_REQUEST')<string>();

export const userOAuthSuccess = createStandardAction('auth/USER_O_AUTH_SUCCESS')<object>();
