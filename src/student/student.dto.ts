import { StudentInterface } from './student.interface';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class StudentDto implements StudentInterface{
  @IsNotEmpty()
  firstName: string

  @IsNotEmpty()
  lastName: string

  @IsNumber()
  education: number
}