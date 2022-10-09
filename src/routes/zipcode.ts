import express from 'express'
import { Address } from '../models'

const router = express.Router()

router.get('/:zipcode', (req, res) => {
  const address = new Address(req.params.zipcode)
  res.json(address)
})

export default router
