import { PartialType, PickType } from '@nestjs/mapped-types';
import { UserShopBaseDto } from '@test/shared/data-access/base';
import { Expose, Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

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

export class ShopFindManyQueryDto extends PartialType(
  PickType(UserShopBaseDto, ['userUuid'] as const)
) {
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
