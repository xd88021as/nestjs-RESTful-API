import { Exclude, Expose, Type, plainToInstance } from 'class-transformer';
import { IsArray, IsNumber, IsString, IsUUID, ValidateNested } from 'class-validator';

export class CommodityBaseDto {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsNumber()
  unitCent: number;

  @Expose()
  @IsString()
  shopName: string;

  @Expose()
  @IsArray()
  @ValidateNested()
  @Type(() => CommodityOptionBaseDto)
  options: CommodityOptionBaseDto[];

  @Exclude()
  static generate(data: CommodityBaseDto): CommodityBaseDto {
    return plainToInstance(CommodityBaseDto, data, { exposeDefaultValues: true });
  }
}

export class CommodityOptionBaseDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsNumber()
  unitCent: number;
}
