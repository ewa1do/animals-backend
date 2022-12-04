import { Router } from 'express';
import {
  createPuppy,
  deleteOnePuppy,
  getAllPuppies,
  getOnePuppy,
  updatePuppy,
  responseFeatures,
} from './puppyController';

const router = Router();

router.route('/').get(responseFeatures, getAllPuppies).post(createPuppy);
router.route('/:id').get(getOnePuppy).patch(updatePuppy).delete(deleteOnePuppy);

export default router;
