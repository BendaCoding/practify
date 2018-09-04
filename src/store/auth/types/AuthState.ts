import { User } from './User';
import { ApiErrorResponse } from '../../../typings';

export interface AuthState {
  isLoading: boolean;
  loggedIn: boolean;
  user: User | null;
  error: ApiErrorResponse | null;
}
