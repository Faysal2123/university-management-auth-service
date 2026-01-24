import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/user.route.js'
import globalErrorHandler from './middlewares/globalErrorHandler.js'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', UserRoutes)

app.get('/', (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ message: 'Server is running successfully' })
})

app.use(globalErrorHandler)

export default app
