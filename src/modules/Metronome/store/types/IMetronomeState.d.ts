declare interface IMetronomeState {
  bpm: number;
  subdivisionsWithVolume: number[];
  pulse: number;
  isRunning: boolean;
  totalBeats: number;
  elapsedSubdivisions: number;
}