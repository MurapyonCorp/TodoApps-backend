import { CreateCountUpTimerInput } from '../../dto/create-countUpTimer.input';
import { UpdateCountUpTimerInput } from '../../dto/update-countUpTimer.input';
import { CountUpTimersModel } from '../../models/countUpTimers/countUpTimers.model';
import { CountUpTimersService } from '../../services/countup-timers/countup-timers.service';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
export declare class CountUpTimersController {
    private readonly countUpTimersService;
    constructor(countUpTimersService: CountUpTimersService);
    readAllCountUpTimers(): Promise<CountUpTimersModel[]>;
    createCountUpTimer(input: CreateCountUpTimerInput): Promise<InsertResult>;
    updateCountUpTimer(input: UpdateCountUpTimerInput): Promise<UpdateResult>;
    deleteCountUpTimer(id: string): Promise<DeleteResult>;
}
