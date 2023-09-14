import { IntersectionType, PartialType, PickType } from '@nestjs/mapped-types';
import { ShopBaseDto } from '@test/shared/data-access/base';

export class UserShopCreateBodyDto extends IntersectionType(
  PickType(ShopBaseDto, ['name', 'localPhoneNumber', 'mobilePhoneNumber'] as const),
  PartialType(PickType(ShopBaseDto, ['introduce'] as const))
) {}

export class UserShopUpdateBodyDto extends PartialType(
  PickType(ShopBaseDto, ['name', 'localPhoneNumber', 'mobilePhoneNumber', 'introduce'] as const)
) {}
