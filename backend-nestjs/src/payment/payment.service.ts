import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './payment.schema';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './create-payment.dto';
import { ChatsService } from '../chats/chats.service';
import { TronService } from '../tron/tron.service';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
    private readonly chatsService: ChatsService,
    private readonly tronWebService: TronService,
  ) {}

  async createPaymentMethod(dto: CreatePaymentDto) {
    const chats = await this.chatsService.findAllByIds(dto.chats);
    const paymentMethod = await this.paymentModel.create({
      ...dto,
      chats: chats?.map((chat) => chat._id) || [],
    });
    await paymentMethod.save();
    return paymentMethod;
  }
  async walletBalance(wallet: string) {
    const balance = await this.tronWebService.GetBalance(wallet);
    return balance;
  }
}
