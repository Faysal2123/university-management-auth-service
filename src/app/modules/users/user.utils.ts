import { User } from './user.model.js'

export const findLastUserId = async () => {
  const LastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return LastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')

  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId
}
