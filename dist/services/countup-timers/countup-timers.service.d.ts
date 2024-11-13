import { CreateCountUpTimerInput } from 'src/dto/create-countUpTimer.input';
import { UpdateCountUpTimerInput } from 'src/dto/update-countUpTimer.input';
import { CountUpTimersEntity } from 'src/entities/countUpTimers/countUpTimers.entity';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
export declare class CountUpTimersService {
    private readonly countUpTimersRepository;
    constructor(countUpTimersRepository: Repository<CountUpTimersEntity>);
    readAllCountUpTimers(): Promise<CountUpTimersEntity[]>;
    createCountUpTimer(input: CreateCountUpTimerInput): Promise<InsertResult>;
    updateCountUpTimer(input: UpdateCountUpTimerInput): Promise<UpdateResult>;
    deleteCountUpTimer(CountUpTimerId: string): Promise<DeleteResult>;
}
