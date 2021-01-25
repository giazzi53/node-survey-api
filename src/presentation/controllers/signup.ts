import { MissingParamError } from '../errors/misssing-param-error'
import { badRequest } from '../helpers/http-helper'
import { SignUpRequest } from '../interfaces/signUp/signUpRequest'
import { HttpResponse } from '../protocols/http'
import { Body } from 'tsoa'

export class SignUpController {
  public signUp (@Body() signUpRequest: SignUpRequest): HttpResponse {
    for (const field in signUpRequest) {
      if (!signUpRequest[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
