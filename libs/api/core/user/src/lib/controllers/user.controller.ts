import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import {
  UserFindManyQueryDto,
  UserFindManyResponseDto,
  UserFindUniqueParamDto,
  UserFindUniqueResponseDto,
} from '@test/shared/data-access/user';
import { UserService } from '../services/user.service';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async findMany(@Query() query: UserFindManyQueryDto): Promise<UserFindManyResponseDto> {
    const createdFrom = await this.userService.toISO(query.createdFrom);
    const createdTo = await this.userService.toISO(query.createdTo);
    const skip = (query.page - 1) * query.limit;
    const users = await this.userService.findMany({
      where: { jobType: query.jobType, createdFrom, createdTo, skip, take: query.limit },
    });
    return UserFindManyResponseDto.generate(users);
  }

  @Get('user-detail/:id')
  async findUnique(@Param() param: UserFindUniqueParamDto): Promise<UserFindUniqueResponseDto> {
    const user = await this.userService.findUnique({ where: { id: param.id } });
    if (!user) {
      throw new NotFoundException();
    }
    return UserFindUniqueResponseDto.generate(user);
  }
}
