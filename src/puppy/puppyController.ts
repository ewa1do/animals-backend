import { Request, Response, NextFunction } from 'express';
import services from './puppyServices';
import catchAsync from '../utils/catchAsyncErrors';
import AppError from '../utils/AppError';

export const responseFeatures = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  req.query.fields = 'id,name,description,gender,image,kind';

  next();
};

export const createPuppy = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const puppy = await services.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        puppy,
      },
    });
  }
);

export const getAllPuppies = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const puppies = await services.getAll(req.query);

    const results = puppies.length;

    res.status(200).json({
      status: 'success',
      results,
      puppies,
    });
  }
);

export const getOnePuppy = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const puppy = await services.getOne(id);

    if (!puppy) {
      return next(new AppError('puppy not found', 400));
    }

    res.status(200).json({
      status: 'success',
      data: puppy,
    });
  }
);

export const updatePuppy = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const puppy = await services.update(id, req.body);

    if (!puppy) {
      return next(new AppError('puppy not found', 400));
    }

    res.status(200).json({
      status: 'success',
      data: puppy,
    });
  }
);

export const deleteOnePuppy = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    await services.deleteOne(id);

    res.status(204).json({
      status: 'success',
    });
  }
);
