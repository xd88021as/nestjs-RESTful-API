import { Injectable } from '@nestjs/common';
import { PrismaService } from '@test/api/common/prisma';
import { UserShopData } from '../interfaces/shop.interface';

@Injectable()
export class UserShopRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserShopData) {
    const userShop = await this.prisma.userShop.create({
      data: {
        shopId: data.shopId,
        userId: data.userId,
      },
    });
    return userShop;
  }
}
