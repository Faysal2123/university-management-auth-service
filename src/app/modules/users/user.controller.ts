import { UserService } from './user.service.js'
import catchAsync from '../../../shared/catchAsync.js'

const createUser = catchAsync(async (req, res, next) => {
  const { user } = req.body
  const result = await UserService.createUser(user)
  next()
  res.status(200).json({
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const UserController = {
  createUser,
}
