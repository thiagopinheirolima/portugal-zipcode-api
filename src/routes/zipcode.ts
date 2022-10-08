import express from 'express'

const router = express.Router()

router.get('/:zipcode', (req, res) => {
  res.send(req.params.zipcode)
})

export default router
