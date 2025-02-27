import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoInput } from 'src/dto/create-todo.input';
import { UpdateTodoInput } from 'src/dto/update-todo.input';
import { TodosEntity } from 'src/entities/todos/todos.entity';
import { TodosService } from 'src/services/todos/todos.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  readAllTodos(): Promise<TodosEntity[]> {
    return this.todosService.readAllTodos();
  }

  @Post()
  async createTodo(@Body() input: CreateTodoInput): Promise<InsertResult> {
    return this.todosService.createTodo(input);
  }

  @Put()
  async updateTodo(@Body() input: UpdateTodoInput): Promise<UpdateResult> {
    return this.todosService.updateTodo(input);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
    return this.todosService.deleteTodo(id);
  }
}
