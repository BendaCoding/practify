declare interface IMetronomeState {
  subdivisionsWithVolume: number[];
  pulse: number;
  isRunning: boolean;
  totalBeats: number;
  elapsedSubdivisions: number;
}