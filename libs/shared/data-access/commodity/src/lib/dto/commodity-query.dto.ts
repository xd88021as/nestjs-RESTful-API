import { PartialType, PickType } from '@nestjs/mapped-types';
import { CommodityBaseDto } from '@test/shared/data-access/base';
import { Expose, Transform } from 'class-transformer';
import { IsInt, IsOptional, IsUUID } from 'class-validator';

const reformatPage = ({ value }: { value: number }): number => {
  if (!value) {
    return 1;
  }
  return +value;
};

const reformatLimit = ({ value }: { value: number }): number => {
  if (!value) {
    return 10;
  }
  return +value;
};

export class CommodityFindManyQueryDto extends PartialType(
  PickType(CommodityBaseDto, ['name'] as const)
) {
  @Expose()
  @IsUUID()
  @IsOptional()
  shopUuid: string;

  @Expose()
  @Transform(reformatPage)
  @IsInt()
  @IsOptional()
  page?: number;

  @Expose()
  @Transform(reformatLimit)
  @IsInt()
  @IsOptional()
  limit?: number;
}
