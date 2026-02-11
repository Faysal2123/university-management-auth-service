import ApiError from '../../../errors/ApiError.js'
import { academicSemesterTitleCodeMapper } from './academicSemester.constant.js'
import type { IAcademicSemester } from './academicSemester.interface.js'
import { AcademicSemester } from './academicSemesterModel.js'
import httpStatus from 'http-status'
const createSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester code')
  }
  const result = await AcademicSemester.create(payload)
  return result
}
export const AcademicSemesterService = {
  createSemester,
}
