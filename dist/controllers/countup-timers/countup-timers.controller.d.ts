import { CreateCountUpTimerInput } from 'src/dto/create-countUpTimer.input';
import { UpdateCountUpTimerInput } from 'src/dto/update-countUpTimer.input';
import { CountUpTimersEntity } from 'src/entities/countUpTimers/countUpTimers.entity';
import { CountUpTimersService } from 'src/services/countup-timers/countup-timers.service';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
export declare class CountUpTimersController {
    private readonly countUpTimersService;
    constructor(countUpTimersService: CountUpTimersService);
    readAllCountUpTimers(): Promise<CountUpTimersEntity[]>;
    createCountUpTimer(input: CreateCountUpTimerInput): Promise<InsertResult>;
    updateCountUpTimer(input: UpdateCountUpTimerInput): Promise<UpdateResult>;
    deleteCountUpTimer(id: string): Promise<DeleteResult>;
}
