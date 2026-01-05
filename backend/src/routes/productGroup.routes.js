import express from 'express';
import protect from '../middlewares/protect.js';
import requireRole from '../middlewares/requireRole.js';
import { createProductGroup, getProductGroups } from '../controllers/productGroup.controller.js';
import { validate } from '../middlewares/validate.js';
import { productGroupSchema } from '../validation/productGroup.validator.js';

const router = express.Router();

router.use(protect, requireRole('SELLER'));

router.post('/', validate(productGroupSchema), createProductGroup);
router.get('/', getProductGroups);

export default router;