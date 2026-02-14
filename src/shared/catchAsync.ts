import type { Request, RequestHandler } from 'express'
import type { NextFunction } from 'express-serve-static-core'

const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
export default catchAsync
