import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { configuration } from '@test/api/common/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: ((): string => {
            const primary = configuration().database;
            const { connector, user, password, host, port, schema } = primary;
            return `${connector}://${user}:${password}@${host}:${port}?schema=${schema}`;
          })(),
        },
      },
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
