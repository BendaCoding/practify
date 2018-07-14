import { get } from 'lodash';
// tslint:disable: no-shadowed-variable
import { createSelector, Selector } from 'reselect';

export const getAuthState: Selector<IAppState, IAuthState> = state => state.auth;

export const getLoggedIn = createSelector<IAppState, IAuthState, IAuthState['loggedIn']>(
  getAuthState,
  state => state.loggedIn,
);

export const getIsLoading = createSelector<IAppState, IAuthState, IAuthState['isLoading']>(
  getAuthState,
  state => state.isLoading,
);

export const user = createSelector<IAppState, IAuthState, IAuthState['user']>(
  getAuthState,
  state => state.user,
);

export const userId = createSelector<IAppState, IAuthState['user'], string>(
  user,
  state => get(state, 'uid', ''),
);

export const getError = createSelector<IAppState, IAuthState, IAuthState['error']>(
  getAuthState,
  state => state.error,
);
