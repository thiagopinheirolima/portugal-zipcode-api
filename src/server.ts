import app from './app'

const PORT = process.env.PORT ?? '3000'

const server = app.listen(PORT, () => {
  console.log(`Server Running here 👉 http://localhost:${PORT}`)
})

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.debug('HTTP server closed')
  })
})
