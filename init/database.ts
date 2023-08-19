import { writeFileSync } from 'fs';

import config from '../libs/api/common/config/src/lib/development';

const generatePrismaEnv = () => {
  const { connector, user, password, host, port, schema } = config.database;
  const schemaStr = schema ? `?schema=${schema}` : '';
  writeFileSync(
    './prisma/.env',
    [
      '# Environment variables declared in this file are automatically made available to Prisma.',
      '# https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema',
      '',
      '# Prisma supports the native connection string format.',
      '# https://pris.ly/d/connection-strings',
      '',
      `DATABASE_URL="${connector}://${user}:${password}@${host}:${port}${schemaStr}"`,
    ].join('\n')
  );
};

const argv = require('minimist')(process.argv.slice(2));
(async () => {
  if (argv.env) {
    generatePrismaEnv();
  }
  process.exit();
})();
