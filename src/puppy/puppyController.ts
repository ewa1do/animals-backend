import { Request, Response, NextFunction } from 'express';
import services from './puppyServices';

export const createPuppy = async (req: Request, res: Response) => {
  const puppy = await services.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      puppy,
    },
  });
};

export const getAllPuppies = async (req: Request, res: Response) => {
  const puppies = await services.getAll();

  res.status(200).json({
    status: 'success',
    puppies,
  });
};

export const getOnePuppy = async (req: Request, res: Response) => {
  const { id } = req.params;

  const puppy = await services.getOne(id);

  res.status(200).json({
    status: 'success',
    data: puppy,
  });
};

export const deleteOnePuppy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await services.deleteOne(id);

  res.status(204).json({
    status: 'success',
  });
};
