import { TodoStatus } from '../models/todos/todos.model';
export declare class UpdateTodoInput {
    id: string;
    title?: string;
    status?: TodoStatus;
}
