import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';

@Module({
  controllers: [VendorsController],
  providers: [VendorsService]
})
export class VendorsModule {}
