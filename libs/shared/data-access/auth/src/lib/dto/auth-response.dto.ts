import { PickType } from '@nestjs/mapped-types';
import { CommonResponseDto } from '@test/shared/data-access/base';
import { Exclude, plainToInstance } from 'class-transformer';
import { IsJWT } from 'class-validator';

export class AuthSignInResponseDto extends PickType(CommonResponseDto, ['data']) {
  @IsJWT()
  data: string;

  @Exclude()
  static generate(data: string): AuthSignInResponseDto {
    return plainToInstance(AuthSignInResponseDto, { data });
  }
}
