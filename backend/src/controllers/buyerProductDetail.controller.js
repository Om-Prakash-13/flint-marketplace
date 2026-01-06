import Product from "../models/product.model.js";
import AppError from "../utils/AppError.js";
import asyncHandler from "../utils/asyncHandler.js";


export const getProductDetail = asyncHandler(async (req, res) => {
    const { productId} = req.params;
    if(!productId){
        throw new Error("Product ID is required", 400);
    }

    const product = await Product.findById(productId).select("title description basePrice images optionGroups relatedProducts relatedProducts alsoBuyProducts status");

    if(!product || product.status !== 'ACTIVE'){
        throw new AppError("Product not found", 404);
    }

    // populate related products
    const relatedProducts = await Product.find({
        _id: {$in: product.relatedProducts || []},
        status: 'ACTIVE'
    }).select("title basePrice images");

    // populate also buy products
    const alsoBuyProducts = await Product.find({
        _id: {$in: product.alsoBuyProducts || []},
        status: 'ACTIVE'
    }).select("title basePrice images");

    res.status(200).json({
        id: product._id,
        title: product.title,
        description: product.description,
        basePrice: product.basePrice,
        images: product.images,
        optionGroups: product.optionGroups,
        relatedProducts: relatedProducts.map((p) => ({
            id: p._id,
            title: p.title,
            basePrice: p.basePrice,
            images: p.images
        })),
        alsoBuyProducts: alsoBuyProducts.map((p) => ({
            id: p._id,
            title: p.title,
            basePrice: p.basePrice,
            images: p.images
        }))
    });
});