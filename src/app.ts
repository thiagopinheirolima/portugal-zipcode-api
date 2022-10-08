import express from 'express'
import actuador from 'express-actuator'
import helmet from 'helmet'

import zipcode from './routes/zipcode'

const app = express()

// Middlewares
app.use(helmet())
app.use(actuador())

// Routes
app.use('/zipcode', zipcode)

export default app
