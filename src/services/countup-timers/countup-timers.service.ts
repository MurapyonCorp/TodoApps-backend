import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCountUpTimerInput } from 'src/dto/create-countUpTimer.input';
import { UpdateCountUpTimerInput } from 'src/dto/update-countUpTimer.input';
import { CountUpTimersEntity } from 'src/entities/countUpTimers/countUpTimers.entity';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CountUpTimersService {
  constructor(
    @InjectRepository(CountUpTimersEntity)
    private readonly countUpTimersRepository: Repository<CountUpTimersEntity>,
  ) {}

  async readAllCountUpTimers(): Promise<CountUpTimersEntity[]> {
    const selectedCountUpTimers = await this.countUpTimersRepository.find()
    return selectedCountUpTimers
  }

  async createCountUpTimer(input: CreateCountUpTimerInput): Promise<InsertResult> {
    const createdCountUpTimers = await this.countUpTimersRepository.insert(input)
    return createdCountUpTimers
  }

  async updateCountUpTimer(input: UpdateCountUpTimerInput): Promise<UpdateResult> {
    const updatedCountUpTimer = await this.countUpTimersRepository.update(input.id, input)
    return updatedCountUpTimer
  }

  async deleteCountUpTimer(CountUpTimerId: string): Promise<DeleteResult> {
    const deletedCountUpTimer = await this.countUpTimersRepository.delete(CountUpTimerId)
    return deletedCountUpTimer
  }
}
