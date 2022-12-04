import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/AppError';

const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    name: err.name,
    message: err.message,
    stack: err.stack,
  });
};

export default (err: any, _: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  sendErrorDev(err, res);
};
