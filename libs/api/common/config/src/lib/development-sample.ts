export default {
  crypto: {
    password: 'dev-password',
    salt: 'dev-salt',
  },
  database: {
    connector: 'postgresql',
    user: 'postgres',
    password: 12345,
    host: 'localhost',
    port: 5234,
    schema: 'public',
  },
  jwt: {
    secret: 'dev',
    expiresIn: '30d',
  },
};
