import { SignUpController } from './SignUpController'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const req = {
      body: {
        email: 'email@example.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const res = sut.execute(req)
    expect(res.body).toEqual(new Error('Missing param: name'))
  })
})
