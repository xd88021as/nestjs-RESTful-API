export interface CryptoConfig {
  password: string;
  salt: string;
}

export interface DatabaseConfig {
  connector: string;
  user: string;
  password: string;
  host: string;
  port: number;
  schema: string;
}

export interface JwtConfig {
  secret: string;
  expiresIn: string;
}
