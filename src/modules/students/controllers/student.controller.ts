import { Controller, Get } from '@nestjs/common'
import { StudentService } from '../services/student.service'

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getHello(): any {
    return this.studentService.getHello()
  }
}
