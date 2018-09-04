import { AuthLoginRequest } from './AuthLoginRequest';

export interface AuthRegisterRequest extends AuthLoginRequest {
  nickname: string;
  firstname: string;
  lastname?: string;
}
