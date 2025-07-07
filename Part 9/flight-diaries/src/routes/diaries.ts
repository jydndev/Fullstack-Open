import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import diaryService from '../services/diaryService';
import { NewEntrySchema } from '../utils';

import { z } from 'zod';
import { DiaryEntry, NewDiaryEntry } from '../types';

router.get('/', (_req, res: Response<DiaryEntry[]>) => {
  res.send(diaryService.getNonSensitiveEntries());
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
