import { Test, TestingModule } from '@nestjs/testing';
import { CountUpTimersService } from './count-up-timers.service';

describe('CountUpTimersService', () => {
  let service: CountUpTimersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountUpTimersService],
    }).compile();

    service = module.get<CountUpTimersService>(CountUpTimersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
