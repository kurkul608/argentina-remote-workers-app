import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './chats.schema';
import { Model, Types } from 'mongoose';
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
  ) {
    // this.updateAllChats();
    // this.findById(-943710240).then((data) => {
    //   console.log(data);
    // });
  }

  // async updateAllChats() {
  //   const chats = await this.chatModel.find();
  //   for (const chat of chats) {
  //     console.log(chat._id);
  //     const tgInfo = await this.botService.getChatTGInfo(chat.id);
  //     await chat.updateOne({
  //       tg_chat_info: {
  //         chat_info: tgInfo.chatInfo,
  //         photos: tgInfo.photos,
  //         chat_members_count: tgInfo.chatMembersCount,
  //       },
  //     });
  //   }
  // }
  async create(createChatDto: CreateChatDto) {
    // const chatInfo = await this.botService.getChatInfoById(createChatDto.id);
    const tgInfo = await this.botService.getChatTGInfo(createChatDto.id);
    return this.chatModel.create({
      ...createChatDto,
      is_hidden: !!createChatDto.isHidden,
      tg_chat_info: {
        chat_info: tgInfo.chatInfo,
        photos: tgInfo.photos,
        chat_members_count: tgInfo.chatMembersCount,
      },
    });
  }

  async findById(id: number) {
    return this.chatModel.findOne({ 'tg_chat_info.chat_info.id': id });
  }
  async findAndUpdateId(id: number, newId: number) {
    const chat = await this.findById(id);
    await chat.updateOne({ id: newId });
    return await this.findById(newId);
  }

  async findAllByIds(ids: number[]) {
    return this.chatModel.find().where('id').in(ids);
  }

  async changeVisible(chatId: string, isHidden: boolean) {
    const chat = await this.getChat(chatId);
    if (chat) {
      await chat.updateOne({ isHidden });
    }
    return chat;
  }
  async getChat(chatId: string) {
    const chat = await this.chatModel.findById(chatId);
    if (chat) {
      return chat;
    }
  }
  async getChatById(chatId: string) {
    const chat = await this.chatModel.findById(chatId);

    if (!chat) {
      throw new HttpException(
        'Document (Chat) not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return chat;
  }
  async getAll(limit: number, offset: number, isHidden: boolean) {
    const filters = {};
    if (typeof isHidden === 'boolean') {
      filters['is_hidden'] = isHidden;
    }
    const chatsFromDB = await this.chatModel
      .find({ ...filters })
      .limit(limit)
      .skip(offset);
    const totalCount = await this.chatModel.find({ ...filters }).count();
    // const data = [];
    // for (const chat of chatsFromDB) {
    //   const chatTGInfo = await this.botService.getChatTGInfo(chat.id);
    //   console.log(chat.id);
    //   const fullChatInfo = {
    //     chat,
    //     ...chatTGInfo,
    //   };
    //   data.push(fullChatInfo);
    // }

    return {
      total: totalCount,
      data: chatsFromDB,
    };
  }

  async getChatInfo(chatId: string, paymentType?: PaymentType) {
    const chat = await this.getChat(chatId);
    const chatTGInfo = await this.botService.getChatTGInfo(
      chat.tg_chat_info.chat_info.id,
    );
    await chat.updateOne({ ...chatTGInfo });

    return chat;
  }

  async getChatsByIds(ids: string[]) {
    const objectIds = ids.map((id) => new Types.ObjectId(id));
    const chats = await this.chatModel.find({ _id: { $in: objectIds } }).exec();

    return chats;
  }
}
