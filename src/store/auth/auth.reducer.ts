import { createReducer } from '../create-reducer';
import { userLoginSuccess, userLoginRequest, userLoginFail, userLoginSync } from './auth.actions';

export const initialState: IAuthState = {
  loggedIn: false,
  loading: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(initialState, {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLoginSync,
})({
  userLoginRequest: state => {
    return {
      ...state,
      loading: true,
    };
  },
  userLoginSuccess: state => {
    return {
      ...state,
      loading: false,
      loggedIn: true,
      error: null,
    };
  },
  userLoginFail: (state, { payload }) => {
    return {
      ...state,
      loading: false,
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
});
