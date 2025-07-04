import express from 'express';
const router = express.Router();

import diaryService from '../services/diaryService';

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntires());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary');
});

export default router;
