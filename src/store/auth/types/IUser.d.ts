declare interface IUser extends IUserResponse {
  firstname: string;
  lastname: string;
  nickname: string;
  settings?: IUserSettings;
}

declare interface IUserSettings {
  activeInstrument: string;
  difficulty: DifficultyEnum;
  instruments: string[];
}