import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { StudentDto } from './student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  public async createStudent(
    @Body()body: StudentDto
  ): Promise<Student> {
    return await this.studentService.createStudent(body)
  }

  @Get()
  async getAllStudent(): Promise<Student[]> {
    return await this.studentService.getAllStudent()
  }

  @Get('/:id')
  async getStudentById(
    @Param('id')id: number
  ): Promise<Student> {
    return await this.studentService.getStudentById(id)
  }

  @Delete('/:id')
  async removeStudent(
    @Param('id')id: number
  ): Promise<void> {
    return await this.studentService.deleteStudent(id)
  }

  @Patch('/:id')
  async updateStudent(
    @Param('id')id: number,
    @Body()body: StudentDto
  ): Promise<Student> {
    return await this.studentService.updateStudent(id, body)
  }
}
