import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model } from 'mongoose';
import { CreateChatDto } from './create-chat.dto';
import { BotService } from '../bot/bot.service';

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
    @Inject(forwardRef(() => BotService))
    private readonly botService: BotService,
  ) {}

  async create(createChatDto: CreateChatDto) {
    const chatInfo = await this.botService.getChatInfoById(createChatDto.id);
    return this.chatModel.create({
      ...createChatDto,
      ...chatInfo,
    });
  }

  async findById(id: number) {
    return this.chatModel.findOne({ id });
  }

  async findAllByIds(ids: number[]) {
    return this.chatModel.find().where('id').in(ids);
  }

  async getAll() {
    const data = await this.chatModel.find();
    return {
      total: data.length,
      data,
    };
  }

  async getChatInfo(chatId: number) {
    const chatInfo = await this.botService.getChatInfoById(chatId);
    const chatMembersCount = await this.botService.getChatMembersById(chatId);
    return {
      chatInfo,
      chatMembersCount,
    };
  }
}
