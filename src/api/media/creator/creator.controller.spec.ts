import { Test, TestingModule } from '@nestjs/testing';
import { CreatorController } from './creator.controller';
import { CreatorService } from './creator.service';

describe('CreatorController', () => {
  let controller: CreatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatorController],
      providers: [CreatorService],
    }).compile();

    controller = module.get<CreatorController>(CreatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
