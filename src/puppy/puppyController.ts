import { Request, Response, NextFunction } from 'express';
import { PuppyServices } from './puppyServices';

const services = new PuppyServices();

export const getAllPuppies = async (req: Request, res: Response) => {
  const data = await services.getAll();

  res.status(200).json({
    status: 'success',
    data,
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
