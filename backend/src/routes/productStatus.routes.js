import express from 'express';
import protect from '../middlewares/protect.js';
import requireRole from '../middlewares/requireRole.js';
import { updateProductStatus } from '../controllers/productStatus.controller.js';
import isOwner from '../middlewares/isOwner.js';
import Product from '../models/product.model.js';
import { validate } from '../middlewares/validate.js';
import { productStatusSchema } from '../validation/productStatus.validator.js';

const router = express.Router();

router.use(protect, requireRole('SELLER'));

router.patch('/:id/status', isOwner(Product), validate(productStatusSchema), updateProductStatus);

export default router;