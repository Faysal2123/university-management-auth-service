import type { ZodError } from 'zod'
import type { IGenericErrorMessage } from '../interfaces/error.js'

import type { IGenericErrorResponse } from '../interfaces/common.js'
import type { ZodIssue } from 'zod'

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })
  const statusCode = 400
  console.log('Zod Error:', error)
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}
export default handleZodError
