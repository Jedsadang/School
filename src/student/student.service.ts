import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {
  }

  public async getAllStudent(): Promise<Student[]> {
    return await this.studentRepository.find()
  }

  public async getStudentById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne(id)
    if (student == null) {
      throw new NotFoundException()
    }
    return student
  }

  public async createStudent(student: StudentDto) {
    const newStudent = await this.studentRepository.create(student)
    return await this.studentRepository.save(newStudent)
  }

  public async updateStudent(id: number, student: StudentDto) {
    await this.studentRepository.update(id, student)
    const updateStudent = await this.studentRepository.findOne(id)
    if (updateStudent == null) {
      throw new NotFoundException()
    }
    return updateStudent
  }

  public async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id)
  }
}
