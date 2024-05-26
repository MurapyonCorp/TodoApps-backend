import { Test, TestingModule } from '@nestjs/testing';
import { CountUpTimersController } from './count-up-timers.controller';

describe('CountUpTimersController', () => {
  let controller: CountUpTimersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountUpTimersController],
    }).compile();

    controller = module.get<CountUpTimersController>(CountUpTimersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
