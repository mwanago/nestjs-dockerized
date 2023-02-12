import { INestApplication } from '@nestjs/common';

export function setupMedia(app: INestApplication) {
  const NodeMediaServer = require('node-media-server');
  const config = {
    rtmp: {
      port: 1935,
      chunk_size: 60000,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60,
    },
    http: {
      port: 8000,
      allow_origin: '*',
    },
    auth: {
      api: true,
      api_user: 'admin',
      api_pass: 'admin',
      play: false,
      publish: false,
      secret: 'nodemedia2017privatekey',
    },
  };

  const nms = new NodeMediaServer(config);
  nms.run();
}
