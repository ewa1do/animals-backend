import { readFileSync } from 'fs';
import express, { Request, Response, Application } from 'express';
import compression from 'compression';
import cors from 'cors';

const app: Application = express();

app.use(compression());
app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  })
);

const data = JSON.parse(
  readFileSync(`${__dirname}/data/apitest.json`, 'utf-8')
);

app.get('/api/v1/puppy', (_: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data,
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server running on PORT: ' + PORT);
});
