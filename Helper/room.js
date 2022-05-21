const Joi = require("@hapi/joi");

//  validate room allocation
module.exports.validate = function validate(req) {
  const schema = Joi.object({
    name: Joi.string().required(),
    role: Joi.string().required().valid("facilitator", "developer"),
    proficiency: Joi.string().valid("all", "html", "css", "javascript"),
  });
  return schema.validate(req);
};
