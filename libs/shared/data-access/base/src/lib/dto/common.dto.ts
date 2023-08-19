import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CommonResponseDto {
  @Expose()
  @IsString()
  @IsOptional()
  message?: string;

  @Expose()
  data: unknown;

  @Expose()
  @IsNumber()
  @IsOptional()
  count?: number;
}
