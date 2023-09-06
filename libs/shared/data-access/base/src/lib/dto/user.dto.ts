import { Exclude, Expose, plainToInstance, Transform } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
import { removeLeadingZeroFromPhoneNumber } from '../utils/transform.util';

export class UserBaseDto {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsPhoneNumber()
  @Transform(removeLeadingZeroFromPhoneNumber)
  phone: string;

  @Expose()
  @IsEmail()
  email: string;

  @Exclude()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @Expose()
  @IsString()
  firstName: string;

  @Expose()
  @IsString()
  lastName: string;

  @Expose()
  @IsDateString()
  birthDate: Date;

  @Expose()
  @IsString()
  genderName: string = null;

  @Exclude()
  static generate(data: UserBaseDto): UserBaseDto {
    return plainToInstance(UserBaseDto, data, { exposeDefaultValues: true });
  }
}
