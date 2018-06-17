declare interface IAuthState {
  isLoading: boolean;
  loggedIn: boolean;
  user: IUser | null;
  error: IApiErrorResponse | null;
}