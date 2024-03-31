import { Injectable } from '@nestjs/common'

@Injectable()
export class StudentService {
  getHello(): any {
    return {
      message: 'Hello World!'
    }
  }
}
