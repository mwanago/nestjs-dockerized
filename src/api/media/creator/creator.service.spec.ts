import { Test, TestingModule } from '@nestjs/testing';
import { CreatorService } from './creator.service';

describe('CreatorService', () => {
  let service: CreatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatorService],
    }).compile();

    service = module.get<CreatorService>(CreatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
