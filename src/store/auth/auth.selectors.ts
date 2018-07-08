// tslint:disable: no-shadowed-variable
import { createSelector } from 'reselect';

export const getAuthState = (state: IAppState) => state.auth;

export const getLoggedIn = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.loggedIn,
);

export const user = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.user,
);

export const userId = createSelector(
  user,
  (userState: IUser) => userState.uid,
);

export const getError = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.error,
);

export const getIsLoading = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.isLoading,
);
