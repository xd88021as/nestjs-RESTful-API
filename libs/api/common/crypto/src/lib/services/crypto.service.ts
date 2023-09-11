import { scryptSync } from 'crypto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CryptoConfig } from '@test/api/common/config';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class CryptoService {
  cipherKey: Buffer;
  config: CryptoConfig;
  saltRounds: number;

  constructor(private readonly configService: ConfigService) {
    this.config = this.configService.get<CryptoConfig>('crypto');
    this.cipherKey = scryptSync(this.config.password, this.config.salt, 32);
    this.saltRounds = 10;
  }

  #isNullOrUndefined(data: string): boolean {
    return data === null || data === undefined;
  }

  async hash(data: string): Promise<string> {
    if (this.#isNullOrUndefined(data)) {
      return data;
    }
    const encryptedData = await bcryptjs.hash(data, this.saltRounds);
    return encryptedData;
  }

  async compare(data: string, encryptedData: string): Promise<boolean> {
    if (this.#isNullOrUndefined(data) || this.#isNullOrUndefined(encryptedData)) {
      return false;
    }
    const result = await bcryptjs.compare(data, encryptedData);
    return result;
  }
}
