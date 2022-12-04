import express from 'express';
import compression from 'compression';
import cors from 'cors';

import AppError from './utils/AppError';
import globalErrorHandler from './errors/errorHandlingMiddleware';

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

app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Something went wrong 😢, Can't find ${req.originalUrl} on this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

export default app;
