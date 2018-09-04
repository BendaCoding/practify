import { User } from "./User";

export interface AuthState {
  isLoading: boolean;
  loggedIn: boolean;
  user: User | null;
  error: ApiErrorResponse | null;
}