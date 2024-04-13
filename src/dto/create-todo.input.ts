import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatus } from 'src/models/todos/todos.model';

export class CreateTodoInput {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  contents?: string;

  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status: TodoStatus;
}
