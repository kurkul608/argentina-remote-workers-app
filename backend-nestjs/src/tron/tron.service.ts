import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TronService {
  constructor(@Inject('TRON_WEB') private readonly tronWeb) {}
  async GetBalance(wallet: string) {
    const userBalance = await this.tronWeb.trx.getBalance(wallet);
    return userBalance;
  }
}
