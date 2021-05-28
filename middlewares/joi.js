import { Schema, ValidationOptions } from "joi";
import { NextApiHandler } from "next";

/**
 * middleware to validate body of request with Joi schema
 * if valid handler will be called otherwise a 400 response with the errors will be returned
 * @param schema {Schema} - joi validation schema
 * @param handler {NextApiHandler} - the next handler to call if the schema is valid
 * @param options {ValidationOptions} - the Joi validations options
 */
export default function validate(schema, handler, options = {}) {
  return async (req, res) => {
    const { error } = await schema.validate(req.body, options);
    const valid = error === undefined;
    if (valid) {
      return handler(req, res);
    } else {
      const { details } = error;
      const message = details.map((i) => {
        return { path: i.path, message: i.message };
      });
      res.status(400).json({ error: message });
    }
  };
}
