import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaService {
  private streamKeys: { [key: string]: string } = {};
  private streamingTime: { [key: string]: number } = {};
  constructor() {}
  async start() {
    return Promise.resolve(undefined);
  }

  async stop() {
    return Promise.resolve(undefined);
  }
}
