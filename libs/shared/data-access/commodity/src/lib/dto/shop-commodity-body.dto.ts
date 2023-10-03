import { PartialType, PickType } from '@nestjs/mapped-types';
import { CommodityBaseDto } from '@test/shared/data-access/base';

export class ShopCommodityCreateBodyDto extends PickType(CommodityBaseDto, [
  'name',
  'unitCent',
] as const) {}

export class ShopCommodityUpdateBodyDto extends PartialType(
  PickType(CommodityBaseDto, ['name', 'unitCent'] as const)
) {}
