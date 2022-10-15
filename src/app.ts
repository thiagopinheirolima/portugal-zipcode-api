import express from 'express'
import actuador from 'express-actuator'
import helmet from 'helmet'
import { zipcodeRouter } from './routes'

const app = express()

// Middlewares
app.use(helmet())
app.use(actuador())

// Routes
app.use('/zipcode', zipcodeRouter)

export default app
