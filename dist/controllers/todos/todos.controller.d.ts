import { CreateTodoInput } from 'src/dto/create-todo.input';
import { UpdateTodoInput } from 'src/dto/update-todo.input';
import { TodosModel } from 'src/models/todos/todos.model';
import { TodosService } from 'src/services/todos/todos.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    readAllTodos(): Promise<TodosModel[]>;
    createTodo(input: CreateTodoInput): Promise<InsertResult>;
    updateTodo(input: UpdateTodoInput): Promise<UpdateResult>;
    deleteTodo(id: string): Promise<DeleteResult>;
}
