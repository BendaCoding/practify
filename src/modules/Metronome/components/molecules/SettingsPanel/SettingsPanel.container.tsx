export interface SettingsPanelProps {
    bpm: number;
    active:boolean;
    subdivision: number;
    onClick: () => void;
    setBpm: (bpm:number) => void;
    doubleSubdivision: () => void;
    halveSubdivision: () => void;
  }
