export interface Exercise {
  name: string;
  description: string;
  id: string;
  playCount: number;
  beatsWithVolume: string[];
  categoryId: string;
  instruments: string[];
  media?: {
    youtubeUrl?: string;
    youtubeStartAt?: string;
    sheetUrl?: string;
  }
}
