import { IsNotEmpty, IsNumber, IsObject } from 'class-validator';

export class CreateCountUpTimerInput {
  @IsObject()
  target_date: object;

  @IsNumber()
  @IsNotEmpty()
  time_hours: number;
  time_minutes: number;
  time_seconds: number;
}
