import { IsEnum, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { TodoStatus } from 'src/entities/todos/todos.entity';

export class CreateTodoInput {
  @IsObject()
  target_date: object;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status: TodoStatus;
}
