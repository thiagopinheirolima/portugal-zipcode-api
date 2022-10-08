import express, { Request, Response } from 'express'

const PORT = process.env.PORT ?? '8080'

const app = express()

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello Typescript with Node.js!')
})

const server = app.listen(PORT, () => {
  console.log(`Server Running here 👉 http://localhost:${PORT}`)
})

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.debug('HTTP server closed')
  })
})
