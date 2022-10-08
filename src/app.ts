import express from 'express'
import actuador from 'express-actuator'

const app = express()
app.use(actuador())

export default app
