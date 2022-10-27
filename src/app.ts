import express from 'express';
import compression from 'compression';
import cors from 'cors';

import puppyRouter from './puppy/puppyRoutes';

const app = express();

app.use(compression());
app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  })
);

app.use('/api/v1/puppy', puppyRouter);

export default app;
