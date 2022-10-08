import express from 'express'
import actuador from 'express-actuator'
import helmet from 'helmet'

const app = express()

app.use(helmet())
app.use(actuador())

export default app
