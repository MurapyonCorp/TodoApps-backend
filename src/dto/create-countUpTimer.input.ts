import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountUpTimerInput {
  @IsString()
  @IsNotEmpty()
  total_amounts: string;
}