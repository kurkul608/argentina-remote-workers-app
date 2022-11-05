import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model } from 'mongoose';
import { CreateChatDto } from './create-chat.dto';
import { BotService } from '../bot/bot.service';

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
    private readonly botService: BotService,
  ) {}

  async create(createChatDto: CreateChatDto) {
    return this.chatModel.create(createChatDto);
  }
  async findById(id: number) {
    return this.chatModel.findOne({ id });
  }
  async getAll() {
    const data = await this.chatModel.find();
    return {
      total: data.length,
      data,
    };
  }

  async getChatInfo(chatId: number) {
    return this.botService.getChatInfoById(chatId);
  }
}
