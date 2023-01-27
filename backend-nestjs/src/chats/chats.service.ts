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
  async getAll(limit: number, offset: number) {
    const chatsFromDB = await this.chatModel.find().limit(limit).skip(offset);
    const totalCount = await this.chatModel.count();
    const data = [];
    for (const chat of chatsFromDB) {
      const chatTGInfo = await this.botService.getChatTGInfo(chat.id);
      const fullChatInfo = {
        chat,
        ...chatTGInfo,
      };
      data.push(fullChatInfo);
    }
    // const data = chatsFromDB.map(async (chatDB) => {
    //   const chatTGInfo = await this.botService.getChatTGInfo(chatDB.id);
    //   return {
    //     chat: chatDB,
    //     ...chatTGInfo,
    //   };
    // });
    return {
      total: totalCount,
      data,
    };
  }

  async getChatInfo(chatId: number, paymentType?: PaymentType) {
    const chat = await this.getChat(chatId);
    const payments = paymentType
      ? await this.paymentService.getPaymentsByTypeAndChat(chatId, paymentType)
      : [];
    const chatTGInfo = await this.botService.getChatTGInfo(chatId);

    if (chat) {
      return {
        chat,
        ...chatTGInfo,
        payments: payments,
      };
    }
  }
}
