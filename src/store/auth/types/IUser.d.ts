declare interface IUser extends IUserResponse {
  firstname: string;
  lastname: string;
  nickname: string;
  settings?: {
    instruments: string[];
    difficulty: string;
  }
}