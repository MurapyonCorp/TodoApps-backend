import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TodoStatus {
  incomplete = 'incomplete',
  done = 'done',
}

@Entity('todos')
export class TodosEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'json' })
  target_date: {
    startDate: string;
    endDate: string;
  };

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'enum', enum: TodoStatus })
  status: TodoStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
