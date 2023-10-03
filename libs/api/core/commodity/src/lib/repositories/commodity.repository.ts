import { Injectable } from '@nestjs/common';
import { PrismaService } from '@test/api/common/prisma';
import {
  CommodityData,
  CommodityFindManyParams,
  CommodityFindUniqueParams,
} from '../interfaces/commodity.interface';

@Injectable()
export class CommodityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CommodityData) {
    const commodity = await this.prisma.commodity.create({
      data: {
        name: data.name,
        unitCent: data.unitCent,
        shopId: data.shopId,
      },
    });
    return commodity;
  }

  async findMany(params: CommodityFindManyParams) {
    const commodity = await this.prisma.commodity.findMany({
      include: {
        options: { select: { name: true, unitCent: true } },
        shop: { select: { name: true } },
      },
      where: {
        name: params.where.name,
        shopId: params.where.shopId,
      },
    });
    return commodity;
  }

  async findUnique(params: CommodityFindUniqueParams) {
    const commodity = await this.prisma.commodity.findUnique({
      include: {
        options: { select: { name: true, unitCent: true } },
        shop: { select: { name: true } },
      },
      where: {
        id: params.where.id,
        uuid: params.where.uuid,
      },
    });
    return commodity;
  }

  async update(id: number, data: Partial<CommodityData>) {
    const commodity = await this.prisma.commodity.update({
      data: {
        name: data.name,
        unitCent: data.unitCent,
      },
      where: { id },
    });
    return commodity;
  }
}
