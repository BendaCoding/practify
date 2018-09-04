import { User } from './types/User';
import { AuthState } from './types/AuthState';
import { AppState } from './../types/AppState';
import { get } from 'lodash';
// tslint:disable: no-shadowed-variable
import { createSelector, Selector } from 'reselect';

export const getAuthState: Selector<AppState, AuthState> = state => state.auth;

export const getLoggedIn = createSelector<AppState, AuthState, AuthState['loggedIn']>(
  getAuthState,
  state => state.loggedIn,
);

export const getIsLoading = createSelector<AppState, AuthState, AuthState['isLoading']>(
  getAuthState,
  state => state.isLoading,
);

export const user = createSelector<AppState, AuthState, AuthState['user']>(
  getAuthState,
  state => state.user,
);

export const userId = createSelector<AppState, AuthState['user'], string>(
  user,
  state => get(state, 'uid', ''),
);

export const settings = createSelector<AppState, AuthState['user'], User['settings']>(
  user,
  state => get(state, 'settings', undefined)
);

export const activeInstrument = createSelector<AppState, User['settings'], string | null>(
  settings,
  state => get(state, 'activeInstrument', null)
);

export const getError = createSelector<AppState, AuthState, AuthState['error']>(
  getAuthState,
  state => state.error,
);
