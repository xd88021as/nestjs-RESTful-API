import { Test, TestingModule } from '@nestjs/testing';
import { CommodityService } from '../services/commodity.service';
import { CommodityController } from './commodity.controller';

describe('CommodityController', () => {
  let controller: CommodityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommodityController],
      providers: [CommodityService],
    }).compile();

    controller = module.get<CommodityController>(CommodityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
