import { Injectable } from '@nestjs/common';
import { PrismaService } from '@test/api/common/prisma';
import { ShopData, ShopFindManyParams, ShopFindUniqueParams } from '../interfaces/shop.interface';

@Injectable()
export class ShopRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ShopData) {
    const shop = await this.prisma.shop.create({
      data: {
        name: data.name,
        introduce: data.introduce,
      },
    });
    return shop;
  }

  async findMany(params: ShopFindManyParams) {
    const shops = await this.prisma.shop.findMany({
      include: {
        users: { select: { user: { select: { uuid: true } } } },
      },
      where: {
        users: params.where.userId ? { some: { userId: params.where.userId } } : undefined,
      },
      skip: params.where.skip,
      take: params.where.take,
    });
    return shops;
  }

  async findUnique(params: ShopFindUniqueParams) {
    const shop = await this.prisma.shop.findUnique({
      include: {
        users: { select: { user: { select: { uuid: true } } } },
      },
      where: {
        id: params.where.id,
        uuid: params.where.uuid,
      },
    });
    return shop;
  }

  async update(id: number, data: Partial<ShopData>) {
    const shop = await this.prisma.shop.update({
      data: {
        name: data.name,
        introduce: data.introduce,
      },
      where: { id },
    });
    return shop;
  }
}
