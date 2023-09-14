import { Exclude, Expose, Transform, plainToInstance } from 'class-transformer';
import { IsPhoneNumber, IsString, IsUUID } from 'class-validator';
import {
  convertLocalPhoneNumberToInternationalNumber,
  removeLeadingZeroFromPhoneNumber,
} from '../utils/transform.util';

export class ShopBaseDto {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsPhoneNumber()
  @Transform(convertLocalPhoneNumberToInternationalNumber)
  localPhoneNumber: string;

  @Expose()
  @IsPhoneNumber()
  @Transform(removeLeadingZeroFromPhoneNumber)
  mobilePhoneNumber: string;

  @Expose()
  @IsString()
  introduce: string;

  @Exclude()
  static generate(data: ShopBaseDto): ShopBaseDto {
    return plainToInstance(ShopBaseDto, data, { exposeDefaultValues: true });
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
