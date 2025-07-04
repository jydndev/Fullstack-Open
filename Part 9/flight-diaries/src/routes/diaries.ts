import express from 'express';
const router = express.Router();

import diaryService from '../services/diaryService';

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntires());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary');
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
