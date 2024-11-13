import { BaseEntity } from 'typeorm';
export declare class CountUpTimersEntity extends BaseEntity {
    id: string;
    target_date: {
        startDate: string;
        endDate: string;
    };
    time_hours: number;
    time_minutes: number;
    time_seconds: number;
    created_at: Date;
    updated_at: Date;
}
