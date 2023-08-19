import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsString } from 'class-validator';

export class UserBaseDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  jobType: string;

  @Expose()
  @IsString()
  city: string;

  @Expose()
  @IsString()
  zipCode: string;

  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsString()
  gender: string;

  @Exclude()
  static generate(data: UserBaseDto): UserBaseDto {
    return plainToInstance(UserBaseDto, data, { exposeDefaultValues: true });
  }
}
