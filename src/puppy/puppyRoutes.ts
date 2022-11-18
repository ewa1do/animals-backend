import { Router } from 'express';
import {
  createPuppy,
  deleteOnePuppy,
  getAllPuppies,
  getOnePuppy,
  responseFeatures,
} from './puppyController';

const router = Router();

router.route('/').get(responseFeatures, getAllPuppies).post(createPuppy);
router.route('/:id').get(getOnePuppy).delete(deleteOnePuppy);

export default router;
