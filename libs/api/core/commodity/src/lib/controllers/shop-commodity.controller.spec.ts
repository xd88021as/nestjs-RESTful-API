import { Test, TestingModule } from '@nestjs/testing';
import { CommodityService } from '../services/commodity.service';
import { ShopCommodityController } from './shop-commodity.controller';

describe('ShopCommodityController', () => {
  let controller: ShopCommodityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopCommodityController],
      providers: [CommodityService],
    }).compile();

    controller = module.get<ShopCommodityController>(ShopCommodityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
