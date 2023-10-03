import { PartialType, PickType } from '@nestjs/mapped-types';
import { CommodityBaseDto } from '@test/shared/data-access/base';

export class CommodityFindUniqueParamDto extends PartialType(PickType(CommodityBaseDto, ['uuid'] as const)) {}
