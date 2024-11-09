import { CreateCountUpTimerInput } from '../../dto/create-countUpTimer.input';
import { UpdateCountUpTimerInput } from '../../dto/update-countUpTimer.input';
import { CountUpTimersModel } from '../../models/countUpTimers/countUpTimers.model';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
export declare class CountUpTimersService {
    private readonly countUpTimersRepository;
    constructor(countUpTimersRepository: Repository<CountUpTimersModel>);
    readAllCountUpTimers(): Promise<CountUpTimersModel[]>;
    createCountUpTimer(input: CreateCountUpTimerInput): Promise<InsertResult>;
    updateCountUpTimer(input: UpdateCountUpTimerInput): Promise<UpdateResult>;
    deleteCountUpTimer(CountUpTimerId: string): Promise<DeleteResult>;
}
