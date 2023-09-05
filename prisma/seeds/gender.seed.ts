import { Prisma, PrismaClient } from '@prisma/client';

export const seedGender = async (prisma: PrismaClient) => {
  const args: Prisma.GenderUpsertArgs[] = seeds.map((seed) => ({
    where: { id: seed.id },
    update: {},
    create: seed,
  }));
  for (const arg of args) {
    await prisma.gender.upsert(arg);
  }
};

const seeds = [
  { id: 1, name: 'male' },
  { id: 2, name: 'female' },
];
