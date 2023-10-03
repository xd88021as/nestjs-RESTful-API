import { Controller, Get, NotFoundException, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { ShopService } from '@test/api/core/shop';
import {
  CommodityFindManyQueryDto,
  CommodityFindManyResponseDto,
  CommodityFindUniqueParamDto,
  CommodityFindUniqueResponseDto,
} from '@test/shared/data-access/commodity';
import { CommodityService } from '../services/commodity.service';

@UseGuards(AuthGuard('jwt'))
@Controller('commoditys')
export class CommodityController {
  constructor(
    private readonly commodityService: CommodityService,
    private readonly shopService: ShopService
  ) {}

  @Get()
  async findMany(@Query() query: CommodityFindManyQueryDto): Promise<CommodityFindManyResponseDto> {
    const shop = await this.shopService.findUnique({ where: { uuid: query.shopUuid } });
    const skip = (query.page - 1) * query.limit;
    const commoditys = await this.commodityService.findMany({
      where: { name: query.name, shopId: shop.id, skip, take: query.limit },
    });
    return CommodityFindManyResponseDto.generate(
      commoditys.map((commodity) => ({
        ...commodity,
        shopName: commodity.shop.name,
      }))
    );
  }

  @Get(':uuid')
  async findUnique(
    @Param() param: CommodityFindUniqueParamDto
  ): Promise<CommodityFindUniqueResponseDto> {
    const commodity = await this.commodityService.findUnique({ where: { uuid: param.uuid } });
    if (!commodity) {
      throw new NotFoundException();
    }
    return CommodityFindUniqueResponseDto.generate({ ...commodity, shopName: commodity.shop.name });
  }
}
