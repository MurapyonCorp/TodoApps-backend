import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateCountUpTimerInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  total_amounts?: string;
}