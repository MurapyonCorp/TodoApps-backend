import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateCountUpTimerInput {
  @IsObject()
  target_date: object;

  @IsString()
  @IsNotEmpty()
  total_amounts: string;
}
