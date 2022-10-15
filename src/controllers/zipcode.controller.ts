import { Request, Response } from 'express'
import { Address } from '../models'

export function zipcodeController(req: Request, res: Response): void {
  const zipcode = req.params.zipcode
  const address = new Address(zipcode)
  res.json(address)
}
