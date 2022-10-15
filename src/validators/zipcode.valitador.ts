import joi from 'joi'
import { NextFunction, Request, Response } from 'express'

const schema = joi
  .string()
  .required()
  .regex(/^[1-9][0-9]{3}-[0-9]{3}$/)

const message = 'zipcode must be in format "xxxx-xxx"'

export function validateZipcode(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const zipcode = req?.params?.zipcode
  const { error } = schema.validate(zipcode)
  if (error != null) {
    res.status(400).send(message)
  } else {
    next()
  }
}
