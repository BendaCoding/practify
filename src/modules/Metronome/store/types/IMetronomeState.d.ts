declare interface IMetronomeState {
  bpm: number;
  isRunning: boolean;
  beatsWithVolume: number[];
  subdivision: number;
  totalMeasures: number;
  elapsedSubdivisions: number;
}