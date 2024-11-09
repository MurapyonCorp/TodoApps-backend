import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCountUpTimerInput } from '../../dto/create-countUpTimer.input';
import { UpdateCountUpTimerInput } from '../../dto/update-countUpTimer.input';
import { CountUpTimersModel } from '../../models/countUpTimers/countUpTimers.model';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CountUpTimersService {
  constructor(
    @InjectRepository(CountUpTimersModel)
    private readonly countUpTimersRepository: Repository<CountUpTimersModel>,
  ) {}

  async readAllCountUpTimers(): Promise<CountUpTimersModel[]> {
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
