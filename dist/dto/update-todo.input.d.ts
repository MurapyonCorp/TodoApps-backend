import { TodoStatus } from 'src/entities/todos/todos.entity';
export declare class UpdateTodoInput {
    id: string;
    title?: string;
    status?: TodoStatus;
}
