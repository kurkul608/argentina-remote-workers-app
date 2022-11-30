import { Inject, Injectable } from '@nestjs/common';
import { CreateRandomDto } from './dto/create-random.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tron, TronDocument } from './tron.schema';
import { Model } from 'mongoose';

@Injectable()
export class TronService {
  constructor(
    @Inject('TRON_WEB') private readonly tronWeb,
    @InjectModel(Tron.name)
    private readonly tronModel: Model<TronDocument>,
  ) {}
  async getBalance(wallet: string) {
    const userBalance = await this.tronWeb.trx.getBalance(wallet);
    return userBalance;
  }
  async createWallet() {
    const wallet: CreateRandomDto = await this.tronWeb.createRandom();
    const walletInDB = await this.tronModel.create(wallet);
    await walletInDB.save();
    return walletInDB;
  }
}
