import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './payment.schema';
import { Model } from 'mongoose';
import { CreatePaymentDto, PaymentType } from './dto/create-payment.dto';
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

  async createPayment(dto: CreatePaymentDto) {
    const chats = await this.chatsService.findAllByIds(dto.chats);
    const wallet = await this.tronWebService.createWallet();
    const paymentMethod = await this.paymentModel.create({
      ...dto,
      chats: chats?.map((chat) => chat._id) || [],
      address: wallet._id,
    });
    await paymentMethod.save();
    return {
      ...JSON.parse(JSON.stringify(paymentMethod)),
      address: wallet.address,
      chats: chats.map((chat) => chat.id),
    };
  }

  async walletBalance(wallet: string) {
    const balance = await this.tronWebService.getBalance(wallet);
    return balance;
  }

  async getPaymentsByTypeAndChat(chatId: number, paymentType: PaymentType) {
    const chat = await this.chatsService.findById(chatId);
    if (chat) {
      const payments = await this.paymentModel
        .find({
          type: paymentType,
          chats: chat._id,
        })
        .populate([
          {
            path: 'address',
            select: 'address',
          },
          {
            path: 'chats',
            select: 'id',
          },
        ]);
      return payments;
    } else {
      return undefined;
    }
  }

  async getAllPayments() {
    const payments = await this.paymentModel.find().populate([
      {
        path: 'address',
        select: 'address',
      },
      {
        path: 'chats',
        select: 'id',
      },
    ]);
    return payments;
  }
}
