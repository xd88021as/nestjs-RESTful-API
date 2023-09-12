import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsArray, IsString, IsUUID } from 'class-validator';

export class ShopBaseDto {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  introduce: string;

  @Exclude()
  static generate(data: ShopBaseDto): ShopBaseDto {
    return plainToInstance(ShopBaseDto, data, { exposeDefaultValues: true });
  }
}

export class ShopFindUniqueBaseDto {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  introduce: string;

  @Expose()
  @IsArray()
  @IsUUID()
  userUuids: string[];

  @Exclude()
  static generate(data: ShopFindUniqueBaseDto): ShopFindUniqueBaseDto {
    return plainToInstance(ShopFindUniqueBaseDto, data, { exposeDefaultValues: true });
  }
}

export class UserShopBaseDto {
  @Expose()
  @IsUUID()
  userUuid: string;

  @Expose()
  @IsUUID()
  shopUuid: string;
}
