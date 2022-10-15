import { Router } from 'express'
import { zipcodeController } from '../controllers'
import { zipcodeValidator } from '../validators'

const zipcodeRouter = Router()

zipcodeRouter.get('/:zipcode', zipcodeValidator, zipcodeController)

export { zipcodeRouter }
