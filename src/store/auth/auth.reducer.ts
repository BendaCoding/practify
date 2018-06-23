import { createReducer } from '../create-reducer';
import { userLoginSuccess, userLoginRequest, userLoginFail, userLoginSync, userLogoutRequest, userLogoutSuccess, userLogoutFail, userOAuthRequest, userOAuthSuccess } from './auth.actions';

export const initialState: IAuthState = {
  loggedIn: false,
  isLoading: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(initialState, {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLoginSync,
  userLogoutRequest,
  userLogoutSuccess,
  userLogoutFail,
  userOAuthRequest,
  userOAuthSuccess,
})({
  userLoginRequest: state => {
    return {
      ...state,
      isLoading: true,
    };
  },
  userLoginSuccess: state => {
    return {
      ...state,
      isLoading: false,
      loggedIn: true,
      error: null,
    };
  },
  userLoginFail: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  },
  userLoginSync: (state, { payload }) => {
    return {
      ...state,
      loggedIn: payload != null,
      user: payload,
    };
  },
  userLogoutRequest: state => {
    return {
      ...state,
      isLoading: true,
    };
  },
  userLogoutSuccess: state => {
    return {
      ...state,
      isLoading: false,
      loggedIn: false,
      user: null,
    };
  },
  userLogoutFail: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      error: payload,
    }
  },
  userOAuthRequest: (state, { payload }) => {
    return {
      ...state,
      isLoading: true,
    }
  },
});
