import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import diaryRouter from './routes/diaries';

const PORT = 3000;

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
