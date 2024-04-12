import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './controllers/todos/todos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      database: 'todoappdb',
      username: 'airi',
      password: 'password',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [TodosController],
  providers: [],
})
export class AppModule {}
