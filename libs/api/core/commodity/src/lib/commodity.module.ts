import { Module } from '@nestjs/common';
import { PrismaModule } from '@test/api/common/prisma';
import { ShopModule } from '@test/api/core/shop';
import { ObjectModule } from '@test/api/util/object';
import { CommodityController } from './controllers/commodity.controller';
import { CommodityRepository } from './repositories/commodity.repository';
import { CommodityService } from './services/commodity.service';

@Module({
  imports: [ObjectModule, PrismaModule, ShopModule],
  controllers: [CommodityController],
  providers: [CommodityRepository, CommodityService],
  exports: [CommodityService],
})
export class CommodityModule {}
