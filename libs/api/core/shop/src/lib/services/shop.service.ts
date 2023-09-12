import { Injectable } from '@nestjs/common';
import { ObjectService } from '@test/api/util/object';
import {
  ShopData,
  ShopFindManyParams,
  ShopFindUniqueParams,
  UserShopData,
} from '../interfaces/shop.interface';
import { ShopRepository } from '../repositories/shop.repository';
import { UserShopRepository } from '../repositories/user-shop.repository';

@Injectable()
export class ShopService {
  constructor(
    private readonly objectService: ObjectService,
    private readonly shopRepository: ShopRepository,
    private readonly userShopRepository: UserShopRepository
  ) {}

  async create(data: ShopData) {
    const shop = await this.shopRepository.create(data);
    return shop;
  }

  async findMany(params: ShopFindManyParams) {
    const shops = await this.shopRepository.findMany(params);
    return shops;
  }

  async findUnique(params: ShopFindUniqueParams) {
    if (this.objectService.isAllNullOrUndefined(params)) {
      return null;
    }
    const shop = await this.shopRepository.findUnique(params);
    return shop;
  }

  async update(id: number, data: Partial<ShopData>) {
    const shop = await this.shopRepository.update(id, data);
    return shop;
  }

  // user-shop

  async createUserShop(data: UserShopData) {
    const userShop = await this.userShopRepository.create(data);
    return userShop;
  }
}
