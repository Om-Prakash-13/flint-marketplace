import express from 'express';
const app = express();

app.use(express.json());

import authRoutes from './routes/auth.routes.js';
app.use("/api/auth", authRoutes);

import sellerProductRoutes from './routes/sellerProduct.routes.js';
app.use("/api/seller/products", sellerProductRoutes);

import errorHandler from './middlewares/errorHandler.js';
app.use(errorHandler);

export default app;