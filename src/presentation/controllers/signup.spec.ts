import { MissingParamError } from '../errors/misssing-param-error'
import { SignUpRequest } from '../interfaces/signUp/signUpRequest'
import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    // sut = system under test
    const sut = new SignUpController()
    const signUpRequest: SignUpRequest = {
      name: undefined,
      email: 'email@email.com',
      password: 'pass123',
      passwordConfirmation: 'pass123'
    }
    const httpResponse = sut.signUp(signUpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const signUpRequest: SignUpRequest = {
      name: 'myname',
      email: undefined,
      password: 'pass123',
      passwordConfirmation: 'pass123'
    }
    const httpResponse = sut.signUp(signUpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new SignUpController()
    const signUpRequest: SignUpRequest = {
      name: 'myname',
      email: 'email',
      password: undefined,
      passwordConfirmation: 'pass123'
    }
    const httpResponse = sut.signUp(signUpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no passwordConfirmation is provided', () => {
    const sut = new SignUpController()
    const signUpRequest: SignUpRequest = {
      name: 'myname',
      email: 'email',
      password: 'pass123',
      passwordConfirmation: undefined
    }
    const httpResponse = sut.signUp(signUpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
