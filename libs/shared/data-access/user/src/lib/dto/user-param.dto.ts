import { Expose, Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class UserFindUniqueParamDto {
  @Expose()
  @Transform(({ value }) => +value)
  @IsInt()
  id: number;
}
