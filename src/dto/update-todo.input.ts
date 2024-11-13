import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatus } from 'src/entities/todos/todos.entity';

export class UpdateTodoInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
