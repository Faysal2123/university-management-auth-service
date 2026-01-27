import express from 'express'
import validateRequest from '../../../middlewares/validateRequest.js'
import { AcademicSemesterValidation } from './academicSemester.validation.js'
import { AcademicSemesterController } from './academicSemester.controller.js'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester,
)

export const AcademicSemesterRoutes = router
