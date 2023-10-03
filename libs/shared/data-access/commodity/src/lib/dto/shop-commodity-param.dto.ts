import { Expose } from 'class-transformer';
import { IsUUID } from 'class-validator';

export class ShopCommodityParamDto {
  @Expose()
  @IsUUID()
  shopUuid: string;
}

export class ShopCommodityUpdateParamDto {
  @Expose()
  @IsUUID()
  shopUuid: string;

  @Expose()
  @IsUUID()
  commodityUuid: string;
}
