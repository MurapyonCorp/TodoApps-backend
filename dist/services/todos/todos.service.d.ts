import { CreateTodoInput } from '../../dto/create-todo.input';
import { UpdateTodoInput } from '../../dto/update-todo.input';
import { TodosModel } from '../../models/todos/todos.model';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
export declare class TodosService {
    private readonly todosRepository;
    constructor(todosRepository: Repository<TodosModel>);
    readAllTodos(): Promise<TodosModel[]>;
    createTodo(input: CreateTodoInput): Promise<InsertResult>;
    updateTodo(input: UpdateTodoInput): Promise<UpdateResult>;
    deleteTodo(todoId: string): Promise<DeleteResult>;
}
