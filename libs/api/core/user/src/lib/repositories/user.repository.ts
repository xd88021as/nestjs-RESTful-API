import { Injectable } from '@nestjs/common';
import { PrismaService } from '@test/api/common/prisma';
import { UserData, UserFindManyParams, UserFindUniqueParams } from '../interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserData) {
    const user = await this.prisma.user.create({
      data: {
        phone: data.phone,
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        genderId: data.genderId,
      },
    });
    return user;
  }

  async findMany(params: UserFindManyParams) {
    const user = await this.prisma.user.findMany({
      include: {
        gender: { select: { name: true } },
      },
      where: {
        createdAt: {
          gte: params.where.createdFrom,
          lte: params.where.createdTo,
        },
        gender: { name: params.where.genderName },
      },
      skip: params.where.skip,
      take: params.where.take,
    });
    return user;
  }

  async findUnique(params: UserFindUniqueParams) {
    const user = await this.prisma.user.findUnique({
      include: {
        gender: { select: { name: true } },
      },
      where: {
        id: params.where.id,
        uuid: params.where.uuid,
        phone: params.where.phone,
        email: params.where.email,
      },
    });
    return user;
  }

  async update(id: number, data: Partial<UserData>) {
    const user = await this.prisma.user.update({
      data: {
        phone: data.phone,
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        genderId: data.genderId,
      },
      where: { id },
    });
    return user;
  }
}
