import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '@test/api/common/config';
import { CommodityModule } from '@test/api/core/commodity';
import { ShopModule } from '@test/api/core/shop';
import { UserModule } from '@test/api/core/user';
import { AuthModule } from '@test/api/feature/auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    CommodityModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ShopModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
