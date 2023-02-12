import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';

@Module({
  providers: [MediaService],
  exports: [MediaService],
  controllers: [MediaController],
  imports: [],
})
export class MediaModule {}
