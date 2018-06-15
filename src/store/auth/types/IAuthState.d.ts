declare interface IAuthState {
  loading: boolean;
  loggedIn: boolean;
  user: IUser | null;
  error: IApiErrorResponse | null;
}