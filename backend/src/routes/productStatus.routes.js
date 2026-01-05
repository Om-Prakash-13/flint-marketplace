import express from 'express';
import protect from '../middlewares/protect.js';
import requireRole from '../middlewares/requireRole.js';
import { updateProductStatus } from '../controllers/productStatus.controller.js';

const router = express.Router();

router.use(protect, requireRole('SELLER'));

router.patch('/:id/status', updateProductStatus);

export default router;