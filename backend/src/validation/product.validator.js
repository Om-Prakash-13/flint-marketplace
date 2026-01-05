import Joi from "joi";

export const createProductSchema = Joi.object({
  title: Joi.string().trim().min(3).max(200).required(),
  description: Joi.string().trim().min(10).required(),
  basePrice: Joi.number().min(0).required(),
  images: Joi.array().items(Joi.string().uri()).min(1).required(),
  category: Joi.string().required(),
});

export const updateProductSchema = Joi.object({
  title: Joi.string().trim().min(3).max(200).optional(),
  description: Joi.string().trim().min(10).optional(),
  basePrice: Joi.number().min(0).optional(),
  images: Joi.array().items(Joi.string().uri()).min(1).optional(),
  category: Joi.string().optional(),
  productGroup: Joi.string().allow(null).optional(),
  optionGroups: Joi.array().optional(),
  status: Joi.forbidden(),
}).min(1);
