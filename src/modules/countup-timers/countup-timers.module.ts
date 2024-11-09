import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountUpTimersController } from '../../controllers/countup-timers/countup-timers.controller';
import { CountUpTimersModel } from '../../models/countUpTimers/countUpTimers.model';
import { CountUpTimersService } from '../../services/countup-timers/countup-timers.service';

@Module({
  imports: [TypeOrmModule.forFeature([CountUpTimersModel])],
  controllers: [CountUpTimersController],
  providers: [CountUpTimersService],
})
export class CountUpTimersModule {}
