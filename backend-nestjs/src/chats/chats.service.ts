import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model } from 'mongoose';
import { CreateChatDto } from './create-chat.dto';
import { BotService } from '../bot/bot.service';
import { PaymentType } from '../payment/dto/create-payment.dto';
import { PaymentService } from '../payment/payment.service';

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
    @Inject(forwardRef(() => BotService))
    private readonly botService: BotService,
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {}

  async create(createChatDto: CreateChatDto) {
    const chatInfo = await this.botService.getChatInfoById(createChatDto.id);
    return this.chatModel.create({
      ...createChatDto,
      isHidden: !!createChatDto.isHidden,
      ...chatInfo,
    });
  }

  async findById(id: number) {
    return this.chatModel.findOne({ id });
  }

  async findAllByIds(ids: number[]) {
    return this.chatModel.find().where('id').in(ids);
  }

  async changeVisible(chatId: number, isHidden: boolean) {
    const chat = await this.getChat(chatId);
    if (chat) {
      await chat.updateOne({ isHidden });
    }
    return chat;
  }
  async getChat(chatId: number) {
    const chat = await this.chatModel.findOne({ id: chatId });
    if (chat) {
      return chat;
    }
  }
  async getAll() {
    const data = await this.chatModel.find();
    return {
      total: data.length,
      data,
    };
  }

  async getChatInfo(chatId: number, paymentType?: PaymentType) {
    const chat = await this.getChat(chatId);
    const chatInfo = await this.botService.getChatInfoById(chatId);
    const chatMembersCount = await this.botService.getChatMembersById(chatId);
    const payments = paymentType
      ? await this.paymentService.getPaymentsByTypeAndChat(chatId, paymentType)
      : [];
    if (chat && chatInfo && chatMembersCount) {
      return {
        chat,
        chatInfo,
        chatMembersCount,
        payments: payments,
      };
    }
  }
}
