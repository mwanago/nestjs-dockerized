import { Controller, Post } from '@nestjs/common';
import { MediaService } from '@mediaengine/media/media.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Media Controller')
@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Post('start')
  async start() {
    return await this.mediaService.start();
  }

  @Post('stop')
  async stop() {
    return await this.mediaService.stop();
  }
}
