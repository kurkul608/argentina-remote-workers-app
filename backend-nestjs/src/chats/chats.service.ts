import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model } from 'mongoose';
import { CreateChatDto } from './create-chat.dto';

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
  ) {}

  async create(createChatDto: CreateChatDto) {
    return this.chatModel.create(createChatDto);
  }
  async findById(id: number) {
    return this.chatModel.findOne({ id });
  }
  async getAll() {
    return this.chatModel.find();
  }
}
