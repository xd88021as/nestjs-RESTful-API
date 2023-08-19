import { Prisma, PrismaClient } from '@prisma/client';

export const seedUser = async (prisma: PrismaClient) => {
  const args: Prisma.UserUpsertArgs[] = seeds.map((seed) => ({
    where: { id: seed.id },
    update: {},
    create: seed,
  }));
  for (const arg of args) {
    await prisma.user.upsert(arg);
  }
};

const seeds = [
  { id: 1, name: '王小明', jobType: '學生', city: '台北', zipCode: '11111', address: '測試地址A', gender: 'male' },
  { id: 2, name: '張小美', jobType: '偶像', city: '台中', zipCode: '33333', address: '測試地址B', gender: 'female' },
];
