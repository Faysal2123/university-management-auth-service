import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string().min(1, 'Role is required'),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
