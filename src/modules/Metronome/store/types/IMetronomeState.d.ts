declare interface IMetronomeState {
  bpm: number;
  isRunning: boolean;
  subdivisionsWithVolume: number[];
  subdivisionsPerBeat: number;
  totalBeats: number;
  elapsedSubdivisions: number;
}