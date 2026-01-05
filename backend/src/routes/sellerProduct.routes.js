import express from 'express';
import protect from '../middlewares/protect.js';   
import requireRole from '../middlewares/requireRole.js';
import { createProduct, updateProduct } from '../controllers/sellerProduct.controller.js';
import isOwner from '../middlewares/isOwner.js';
import Product from '../models/product.model.js';
import { validate } from '../middlewares/validate.js';
import { createProductSchema, updateProductSchema } from '../validation/product.validator.js';

const router = express.Router();

router.use(protect, requireRole('SELLER'));

router.post('/', validate(createProductSchema), createProduct);
router.put('/:id', isOwner(Product), validate(updateProductSchema), updateProduct);

export default router;