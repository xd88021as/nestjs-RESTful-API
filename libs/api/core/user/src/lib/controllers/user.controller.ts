import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import {
  UserFindManyQueryDto,
  UserFindManyResponseDto,
  UserFindUniqueParamDto,
  UserFindUniqueResponseDto,
} from '@test/shared/data-access/user';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findMany(@Query() query: UserFindManyQueryDto): Promise<UserFindManyResponseDto> {
    const createdFrom = await this.userService.toISO(query.createdFrom);
    const createdTo = await this.userService.toISO(query.createdTo);
    const skip = (query.page - 1) * query.limit;
    const users = await this.userService.findMany({
      where: { genderName: query.genderName, createdFrom, createdTo, skip, take: query.limit },
    });
    return UserFindManyResponseDto.generate(
      users.map((user) => ({
        ...user,
        genderName: user.gender.name,
      }))
    );
  }

  @Get(':uuid')
  async findUnique(@Param() param: UserFindUniqueParamDto): Promise<UserFindUniqueResponseDto> {
    const user = await this.userService.findUnique({ where: { uuid: param.uuid } });
    if (!user) {
      throw new NotFoundException();
    }
    return UserFindUniqueResponseDto.generate({ ...user, genderName: user.gender?.name });
  }
}
