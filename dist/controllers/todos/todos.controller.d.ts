import { CreateTodoInput } from '../../dto/create-todo.input';
import { UpdateTodoInput } from '../../dto/update-todo.input';
import { TodosModel } from '../../models/todos/todos.model';
import { TodosService } from '../../services/todos/todos.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    readAllTodos(): Promise<TodosModel[]>;
    createTodo(input: CreateTodoInput): Promise<InsertResult>;
    updateTodo(input: UpdateTodoInput): Promise<UpdateResult>;
    deleteTodo(id: string): Promise<DeleteResult>;
}
