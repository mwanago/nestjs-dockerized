import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';

@Module({
  controllers: [CreatorController],
  providers: [CreatorService]
})
export class CreatorModule {}
