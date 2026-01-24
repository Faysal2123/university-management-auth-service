import mongoose from 'mongoose'
import app from './app.js'
import config from './config/index.js'
import { logger, errorLogger } from './shared/logger.js'
import type { Server } from 'http'

process.on('uncaughtException', err => {
  console.log('Uncaught Exception is detected, we are closing our server...')
  errorLogger.error(err)
  process.exit(1)
})
let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully')
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect database', err)
  }
  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection is detected, we are closing our server...')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
      })
    }
    process.exit(1)
  })
}
main()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
