import { NewDiaryEntry, Visibility, Weather } from './types';
import z from 'zod';

const newEntrySchema = z.object({
  weather: z.nativeEnum(Weather),
  Visibility: z.nativeEnum(Visibility),
  date: z.string().date(),
  comment: z.string().optional(),
});

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  return newEntrySchema.parse(object);
};

export default toNewDiaryEntry;
