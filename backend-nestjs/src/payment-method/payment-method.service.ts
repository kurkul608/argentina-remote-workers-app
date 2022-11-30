import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './payment-method.schema';
import { Model } from 'mongoose';
import { CreatePaymentMethodDto } from './create-payment-method.dto';
import { ChatsService } from '../chats/chats.service';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
    private readonly chatsService: ChatsService,
    @Inject('TRON_WEB') private readonly tronWeb,
  ) {}

  async createPaymentMethod(dto: CreatePaymentMethodDto) {
    const chats = await this.chatsService.findAllByIds(dto.chats);
    const paymentMethod = await this.paymentModel.create({
      ...dto,
      chats: chats?.map((chat) => chat._id) || [],
    });
    await paymentMethod.save();
    return paymentMethod;
  }

  async tronWebTest() {
    const userBalance = await this.tronWeb.trx.getBalance(
      'TQvxpD3noy3WYy2zW3UceUGhXkxph4dvth',
    );
    return userBalance;
  }
}
