import { Exercise } from './../../exercises/types';

export interface ExerciseWithPlaylistData extends Exercise {
  active: boolean;
  progress: number;
  timeLeft: string;
  finished: boolean;
  playCount: number;
}