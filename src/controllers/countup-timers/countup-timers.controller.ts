import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCountUpTimerInput } from 'src/dto/create-countUpTimer.input';
import { UpdateCountUpTimerInput } from 'src/dto/update-countUpTimer.input';
import { CountUpTimersModel } from 'src/models/countUpTimers/countUpTimers.model';
import { CountUpTimersService } from 'src/services/countup-timers/countup-timers.service';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Controller('countup-timers')
export class CountUpTimersController {
  constructor(private readonly countUpTimersService: CountUpTimersService) {}

  @Get()
  readAllTodos(): Promise<CountUpTimersModel[]> {
    return this.countUpTimersService.readAllCountUpTimers();
  }

  @Post()
  async createTodo(
    @Body() input: CreateCountUpTimerInput,
  ): Promise<InsertResult> {
    return this.countUpTimersService.createCountUpTimer(input);
  }

  @Put()
  async updateTodo(
    @Body() input: UpdateCountUpTimerInput,
  ): Promise<UpdateResult> {
    return this.countUpTimersService.updateCountUpTimer(input);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
    return this.countUpTimersService.deleteCountUpTimer(id);
  }
}
