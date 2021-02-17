import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StudentInterface } from './student.interface';

@Entity()
export class Student implements StudentInterface {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: 'first_name' })
  public firstName: string

  @Column({ name: 'last_name' })
  public lastName: string

  @Column( { name: 'education' })
  public education: number

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date
}