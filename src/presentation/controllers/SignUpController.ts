
export class SignUpController {
  execute (req: any): any {
    return {
      body: new Error('Missing param: name'),
      status: 400
    }
  }
}
