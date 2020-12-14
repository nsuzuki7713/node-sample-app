import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserSample {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;
}
