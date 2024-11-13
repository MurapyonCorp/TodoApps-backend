import { CreateTodoInput } from 'src/dto/create-todo.input';
import { UpdateTodoInput } from 'src/dto/update-todo.input';
import { TodosEntity } from 'src/entities/todos/todos.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
export declare class TodosService {
    private readonly todosRepository;
    constructor(todosRepository: Repository<TodosEntity>);
    readAllTodos(): Promise<TodosEntity[]>;
    createTodo(input: CreateTodoInput): Promise<InsertResult>;
    updateTodo(input: UpdateTodoInput): Promise<UpdateResult>;
    deleteTodo(todoId: string): Promise<DeleteResult>;
}
