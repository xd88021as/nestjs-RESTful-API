import { PickType } from '@nestjs/mapped-types';
import { CommonResponseDto, CommodityBaseDto } from '@test/shared/data-access/base';
import { Exclude, plainToInstance } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class CommodityFindUniqueResponseDto extends PickType(CommonResponseDto, ['data']) {
  @ValidateNested()
  data: CommodityBaseDto;

  @Exclude()
  static generate(data: CommodityBaseDto): CommodityFindUniqueResponseDto {
    return plainToInstance(CommodityFindUniqueResponseDto, { data: CommodityBaseDto.generate(data) });
  }
}

export class CommodityFindManyResponseDto extends PickType(CommonResponseDto, ['data']) {
  @ValidateNested()
  data: CommodityBaseDto[];

  @Exclude()
  static generate(dataArray: CommodityBaseDto[]): CommodityFindManyResponseDto {
    return plainToInstance(CommodityFindManyResponseDto, {
      data: dataArray.map((data) => CommodityBaseDto.generate(data)),
    });
  }
}