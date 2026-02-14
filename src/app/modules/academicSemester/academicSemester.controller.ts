import { AcademicSemesterService } from './academicSemester.service.js'
import catchAsync from '../../../shared/catchAsync.js'
import sendResponse from '../../../shared/sendResponse.js'
import httpStatus from 'http-status'
const createSemester = catchAsync(async (req, res, next) => {
  const { ...academicSemesterData } = req.body
  const result =
    await AcademicSemesterService.createSemester(academicSemesterData)
  next()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  })
})

export const AcademicSemesterController = {
  createSemester,
}
