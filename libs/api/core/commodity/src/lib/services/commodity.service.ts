import { Injectable } from '@nestjs/common';
import { ObjectService } from '@test/api/util/object';
import { CommodityData, CommodityFindManyParams, CommodityFindUniqueParams } from '../interfaces/commodity.interface';
import { CommodityRepository } from '../repositories/commodity.repository';

@Injectable()
export class CommodityService {
  constructor(
    private readonly objectService: ObjectService,
    private readonly commodityRepository: CommodityRepository
  ) {}

  async create(data: CommodityData) {
    const commodity = await this.commodityRepository.create(data);
    return commodity;
  }

  async findMany(params: CommodityFindManyParams) {
    const commoditys = await this.commodityRepository.findMany(params);
    return commoditys;
  }

  async findUnique(params: CommodityFindUniqueParams) {
    if (this.objectService.isAllNullOrUndefined(params)) {
      return null;
    }
    const commodity = await this.commodityRepository.findUnique(params);
    return commodity;
  }

  async update(id: number, data: Partial<CommodityData>) {
    const commodity = await this.commodityRepository.update(id, data);
    return commodity;
  }
}
