import express from 'express'
import { Address } from '../models'
import { validateZipcode } from '../validators'

const zipcodeRouter = express.Router()

zipcodeRouter.get('/:zipcode', validateZipcode, (req, res) => {
  const zipcode = req.params.zipcode

  // TODO: check service for zipcode
  // const address = service.get(zipcode)

  const address = new Address(zipcode)
  res.json(address)
})

export { zipcodeRouter }
