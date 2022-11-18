import { Request, Response, NextFunction } from 'express';
import services from './puppyServices';

export const responseFeatures = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  req.query.fields = 'id,name,description,gender,image,kind';

  next();
};

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
  const puppies = await services.getAll(req.query);

  const results = puppies.length;

  res.status(200).json({
    status: 'success',
    results,
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
