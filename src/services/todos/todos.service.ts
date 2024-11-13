import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoInput } from 'src/dto/create-todo.input';
import { UpdateTodoInput } from 'src/dto/update-todo.input';
import { TodosEntity } from 'src/entities/todos/todos.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private readonly todosRepository: Repository<TodosEntity>,
  ) {}

  async readAllTodos(): Promise<TodosEntity[]> {
    const selectedTodos = await this.todosRepository.find();
    return selectedTodos;
  }

  async createTodo(input: CreateTodoInput): Promise<InsertResult> {
    const createdTodos = await this.todosRepository.insert(input);
    return createdTodos;
  }

  async updateTodo(input: UpdateTodoInput): Promise<UpdateResult> {
    const updatedTodo = await this.todosRepository.update(input.id, input);
    return updatedTodo;
  }

  async deleteTodo(todoId: string): Promise<DeleteResult> {
    const deletedTodo = await this.todosRepository.delete(todoId);
    return deletedTodo;
  }
}
