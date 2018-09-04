import { DifficultyEnum } from './DifficultyEnum';

export interface UserSettings {
  activeInstrument: string;
  difficulty: DifficultyEnum;
  instruments: string[];
}
