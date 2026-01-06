import express from 'express';
import { listProducts } from '../controllers/buyerProduct.controller.js';
import { getProductDetail } from '../controllers/buyerProductDetail.controller.js';

const router = express.Router();

router.get('/', listProducts);
router.get("/:productId", getProductDetail);

export default router;