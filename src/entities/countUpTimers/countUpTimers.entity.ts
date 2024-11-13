import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('countUpTimers')
export class CountUpTimersEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'json' })
  target_date: {
    startDate: string;
    endDate: string;
  };

  @Column({ type: 'integer' })
  time_hours: number;

  @Column({ type: 'integer' })
  time_minutes: number;

  @Column({ type: 'integer' })
  time_seconds: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
