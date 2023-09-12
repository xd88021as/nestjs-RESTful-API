import { Module } from '@nestjs/common';
import { PrismaModule } from '@test/api/common/prisma';
import { UserModule } from '@test/api/core/user';
import { ObjectModule } from '@test/api/util/object';
import { ShopController } from './controllers/shop.controller';
import { UserShopController } from './controllers/user-shop.controller';
import { ShopRepository } from './repositories/shop.repository';
import { UserShopRepository } from './repositories/user-shop.repository';
import { ShopService } from './services/shop.service';

@Module({
  imports: [ObjectModule, PrismaModule, UserModule],
  controllers: [ShopController, UserShopController],
  providers: [ShopRepository, ShopService, UserShopRepository],
  exports: [ShopService],
})
export class ShopModule {}
