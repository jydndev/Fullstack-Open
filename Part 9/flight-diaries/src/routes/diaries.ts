import express from 'express';
const router = express.Router();

import diaryService from '../services/diaryService';
import { NewEntrySchema } from '../utils';

import z from 'zod';

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntires());
});

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = NewEntrySchema.parse(req.body);
    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: 'unknown error' });
    }
  }
});

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

export default router;
