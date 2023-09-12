import { Test, TestingModule } from '@nestjs/testing';
import { ShopService } from '../services/shop.service';
import { UserShopController } from './user-shop.controller';

describe('UserShopController', () => {
  let controller: UserShopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserShopController],
      providers: [ShopService],
    }).compile();

    controller = module.get<UserShopController>(UserShopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
