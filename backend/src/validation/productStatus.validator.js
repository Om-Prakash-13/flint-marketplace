import Joi from "joi";

export const productStatusSchema = Joi.object({
  status: Joi.string().valid("ACTIVE", "ARCHIVED").required(),
});
