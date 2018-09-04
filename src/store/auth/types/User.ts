import { UserSettings } from './UserSettings';
import { UserResponse } from './UserResponse';

export interface User extends UserResponse {
  firstname: string;
  lastname: string;
  nickname: string;
  settings?: UserSettings;
}
