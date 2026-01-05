import Joi from "joi";

export const productGroupSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required(),
  description: Joi.string().trim().max(300).optional(),
});
