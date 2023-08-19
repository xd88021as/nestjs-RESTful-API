import { Module } from '@nestjs/common';
import { ObjectService } from './services/object.service';

@Module({
  providers: [ObjectService],
  exports: [ObjectService],
})
export class ObjectModule {}
