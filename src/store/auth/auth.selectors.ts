import { get } from 'lodash';
// tslint:disable: no-shadowed-variable
import { createSelector, Selector } from 'reselect';

export const getAuthState: Selector<AppState, IAuthState> = state => state.auth;

export const getLoggedIn = createSelector<AppState, IAuthState, IAuthState['loggedIn']>(
  getAuthState,
  state => state.loggedIn,
);

export const getIsLoading = createSelector<AppState, IAuthState, IAuthState['isLoading']>(
  getAuthState,
  state => state.isLoading,
);

export const user = createSelector<AppState, IAuthState, IAuthState['user']>(
  getAuthState,
  state => state.user,
);

export const userId = createSelector<AppState, IAuthState['user'], string>(
  user,
  state => get(state, 'uid', ''),
);

export const settings = createSelector<AppState, IAuthState['user'], IUser['settings']>(
  user,
  state => get(state, 'settings', undefined)
);

export const activeInstrument = createSelector<AppState, IUser['settings'], string | null>(
  settings,
  state => get(state, 'activeInstrument', null)
);

export const getError = createSelector<AppState, IAuthState, IAuthState['error']>(
  getAuthState,
  state => state.error,
);
