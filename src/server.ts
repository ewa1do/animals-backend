import express, { Request, Response, Application } from 'express';
import compression from 'compression';
import { readFileSync } from 'fs';

const app: Application = express();

app.use(compression());
app.use(express.json());

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
