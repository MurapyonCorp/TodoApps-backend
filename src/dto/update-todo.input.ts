import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatus } from 'src/models/todos.model';

export class UpdateTodoInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  contents?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
