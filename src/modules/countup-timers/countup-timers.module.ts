import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountUpTimersController } from 'src/controllers/countup-timers/countup-timers.controller';
import { CountUpTimersEntity } from 'src/entities/countUpTimers/countUpTimers.entity';
import { CountUpTimersService } from 'src/services/countup-timers/countup-timers.service';

@Module({
  imports: [TypeOrmModule.forFeature([CountUpTimersEntity])],
  controllers: [CountUpTimersController],
  providers: [CountUpTimersService],
})
export class CountUpTimersModule {}
