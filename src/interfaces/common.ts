import type { IGenericErrorMessage } from './error.js'

export interface IGenericErrorResponse {
  statusCode: number
  message: string
  errorMessage: IGenericErrorMessage[]
}
