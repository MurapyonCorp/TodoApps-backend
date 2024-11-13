import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from 'src/controllers/todos/todos.controller';
import { TodosEntity } from 'src/entities/todos/todos.entity';
import { TodosService } from 'src/services/todos/todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodosEntity])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
