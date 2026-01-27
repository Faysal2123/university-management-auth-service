import { z } from 'zod'
import { academicSemesterMonths } from './academicSemester.constant.js'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall']),
    year: z.number().refine(val => val !== undefined, {
      message: 'Year is required',
    }),
    code: z.enum(['01', '02', '03']),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]),
  }),
})

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
}
