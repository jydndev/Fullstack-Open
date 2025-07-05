import express from 'express';
const router = express.Router();

import diaryService from '../services/diaryService';

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntires());
});

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body;
  const addedEntry = diaryService.addDiary({
    date,
    weather,
    visibility,
    comment,
  });

  res.json(addedEntry);
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
