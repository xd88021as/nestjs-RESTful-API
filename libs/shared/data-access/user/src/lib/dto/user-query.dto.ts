import { IntersectionType, PartialType, PickType } from '@nestjs/mapped-types';
import { UserBaseDto } from '@test/shared/data-access/base';
import { Expose, Transform } from 'class-transformer';
import { IsDateString, IsInt, IsOptional } from 'class-validator';

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

export class UserFindManyQueryDto extends IntersectionType(
  PartialType(PickType(UserBaseDto, ['jobType'] as const))
) {
  @Expose()
  @IsDateString()
  @IsOptional()
  createdFrom: Date;

  @Expose()
  @IsDateString()
  @IsOptional()
  createdTo: Date;

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
