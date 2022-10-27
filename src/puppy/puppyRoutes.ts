import { Router } from 'express';
import { getAllPuppies, getOnePuppy } from './puppyController';

const router = Router();

router.route('/').get(getAllPuppies);

router.route('/:id').get(getOnePuppy);

export default router;
