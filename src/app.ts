import express, { type Application, type Request, type Response } from 'express'
const app: Application = express()
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

export default app
