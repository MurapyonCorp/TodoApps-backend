import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './modules/todos/todos.module';
import { DATABASE_CONFIG } from './config/database.config';
import { CountUpTimersModule } from './modules/countup-timers/countup-timers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DATABASE_CONFIG.DB_CONNECTION,
      host: DATABASE_CONFIG.DB_HOST,
      port: DATABASE_CONFIG.DB_PORT,
      database: DATABASE_CONFIG.DB_DATABASE,
      username: DATABASE_CONFIG.DB_USERNAME,
      password: DATABASE_CONFIG.DB_PASSWORD,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    TodosModule,
    CountUpTimersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
