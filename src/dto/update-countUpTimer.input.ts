import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class UpdateCountUpTimerInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsOptional()
  time_hours?: number;
  time_minutes?: number;
  time_seconds?: number;
}