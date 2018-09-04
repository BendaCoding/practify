export interface Exercise {
  name: string;
  description: string;
  id: string;
  playCount: number;
  beatsWithVolume: string[];
  categoryId: string;
  instruments: string[];
  media?: {
    youtubeId?: string;
    youtubeStartAt?: number;
    sheetUrl?: string;
  }
}
