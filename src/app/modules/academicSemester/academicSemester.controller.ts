import { AcademicSemesterService } from './academicSemester.service.js'
import catchAsync from '../../../shared/catchAsync.js'

const createSemester = catchAsync(async (req, res, next) => {
  const { ...academicSemesterData } = req.body
  const result =
    await AcademicSemesterService.createSemester(academicSemesterData)
  next()
  res.status(200).json({
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  })
})

export const AcademicSemesterController = {
  createSemester,
}
