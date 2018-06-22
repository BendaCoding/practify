declare interface IAuthRegisterRequest extends IAuthLoginRequest {
  nickname: string;
  firstname: string;
  lastname?: string;
}