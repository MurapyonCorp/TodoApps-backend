import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoInput } from '../../dto/create-todo.input';
import { UpdateTodoInput } from '../../dto/update-todo.input';
import { TodosModel } from '../../models/todos/todos.model';
import { TodosService } from '../../services/todos/todos.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  readAllTodos(): Promise<TodosModel[]> {
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
