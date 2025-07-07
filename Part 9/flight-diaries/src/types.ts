import z from 'zod';
import nweEntrySchema from './utils';

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = z.infer<typeof nweEntrySchema>;
