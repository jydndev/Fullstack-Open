import express from 'express';
import diaryRouter from './src/routes/diaries';
const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
