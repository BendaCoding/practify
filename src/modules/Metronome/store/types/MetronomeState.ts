export interface MetronomeState {
  bpm: number;
  isRunning: boolean;
  beatsWithVolume: number[];
  currentBeat: number;
  subdivision: number;
  totalMeasures: number;
  elapsedSubdivisions: number;
}
