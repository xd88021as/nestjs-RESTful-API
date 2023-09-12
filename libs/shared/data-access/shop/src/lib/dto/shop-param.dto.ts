import { PartialType, PickType } from '@nestjs/mapped-types';
import { ShopBaseDto } from '@test/shared/data-access/base';

export class ShopFindUniqueParamDto extends PartialType(PickType(ShopBaseDto, ['uuid'] as const)) {}
