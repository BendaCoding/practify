import { createSelector } from 'reselect';

export const getAuthState = (state: IAppState) => state.auth;

export const getLoggedIn = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.loggedIn,
);

export const getUser = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.user,
);

export const getError = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.error,
);

export const getIsLoading = createSelector(
  getAuthState,
  (authState: IAuthState) => authState.isLoading,
);
