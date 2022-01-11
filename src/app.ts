import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello Real Time Data World!');
});

export default app;
