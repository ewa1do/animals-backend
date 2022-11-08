import { Router } from 'express';
import {
  createPuppy,
  deleteOnePuppy,
  getAllPuppies,
  getOnePuppy,
} from './puppyController';

const router = Router();

router.route('/').get(getAllPuppies).post(createPuppy);
router.route('/:id').get(getOnePuppy).delete(deleteOnePuppy);

export default router;
