import express from 'express'
import validateRequest from '../../../middlewares/validateRequest.js'
import { AcademicSemesterValidation } from './academicSemester.validation.js'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
)

export const AcademicSemesterRoutes = router
