import { Injectable } from '@nestjs/common';
import { PrismaService } from '@test/api/common/prisma';
import { UserFindManyParams, UserFindUniqueParams } from '../interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(params: UserFindManyParams) {
    const user = await this.prisma.user.findMany({
      where: {
        jobType: params.where.jobType,
        createdAt: {
          gte: params.where.createdFrom,
          lte: params.where.createdTo,
        },
      },
      skip: params.where.skip,
      take: params.where.take,
    });
    return user;
  }

  async findUnique(params: UserFindUniqueParams) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: params.where.id,
      },
    });
    return user;
  }
}
