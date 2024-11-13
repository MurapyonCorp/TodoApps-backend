import { BaseEntity } from 'typeorm';
export declare enum TodoStatus {
    incomplete = "incomplete",
    done = "done"
}
export declare class TodosEntity extends BaseEntity {
    id: string;
    target_date: {
        startDate: string;
        endDate: string;
    };
    title: string;
    status: TodoStatus;
    created_at: Date;
    updated_at: Date;
}
