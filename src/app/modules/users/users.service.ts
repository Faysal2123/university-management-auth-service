import config from '../../../config/index.js'
import type { IUser } from './users.interface.js'
import { User } from './users.model.js'
import { generateUserId } from './users.utils.js'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
