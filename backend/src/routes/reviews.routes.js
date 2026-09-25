import { Router } from 'express';
import { addReview } from '../controllers/reviews.controller.js';

const router = Router();

router.post('/', addReview);

export default router;
