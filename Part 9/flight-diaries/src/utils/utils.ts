import { NewDiaryEntry } from '../types';

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'comment' in object &&
    'date' in object &&
    'weather' in object &&
    'visibility' in object
  ) {
  const newEntry: NewDiaryEntry = {
    weather: 'cloudy', // fake the return value
    visibility: 'great',
    date: '2022-1-1',
    comment: 'fake news',
  };
  return newEntry;
};

export default toNewDiaryEntry;
