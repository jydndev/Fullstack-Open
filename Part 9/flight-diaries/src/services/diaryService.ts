import diaries from '../../data/entries';
import { NonSensitiveDiaryEntry } from '../types';

import { DiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntires = (): NonSensitiveDiaryEntry[] => {
  return diaries;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  getNonSensitiveEntires,
  addDiary,
};
