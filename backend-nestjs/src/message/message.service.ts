import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { BotService } from '../bot/bot.service';
import { SendMessageDto } from './dto/send-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './message.schema';
import { Model, Types } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetMessagesQueryDto } from './dto/query/get-messages-query.dto';
import { ChangeMessageDto } from './dto/change-message.dto';

@Injectable()
export class MessageService {
  constructor(
    private readonly botService: BotService,
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  // async sendMessages({ pin_message, message, chat_ids }: SendMessageDto) {
  //   for (const chatId of chat_ids) {
  //     await this.botService.sendMessage(chatId, message, pin_message);
  //   }
  //   return true;
  // }

  async createMessage(dto: CreateMessageDto, token: string) {
    const { _id } = await this.authService.getUserInfo(token);

    const message = await this.messageModel.create({ ...dto, owner: _id });

    return this.messageModel.findById(message._id);
  }

  async changeMessage(id: string, dto: ChangeMessageDto, token: string) {
    const { _id } = await this.authService.getUserInfo(token);

    const message = await this.getMessage(id);
    if (String(message.owner) !== String(_id)) {
      throw new HttpException(
        'You are not the message creator',
        HttpStatus.FORBIDDEN,
      );
    }

    await message.updateOne({ ...dto });

    return this.getMessage(id);
  }

  async getMyMessages(query: GetMessagesQueryDto, token: string) {
    const { _id } = await this.authService.getUserInfo(token);
    const filter = {};
    filter['owner'] = _id;

    const messages = await this.messageModel
      .find({ ...filter })
      .limit(query.limit)
      .skip(query.offset)
      .exec();
    const total = await this.messageModel.countDocuments({ ...filter }).exec();

    return {
      data: messages,
      total,
    };
  }

  async getMessage(id: string) {
    const message = await this.messageModel.findById(new Types.ObjectId(id));

    if (!message) {
      throw new HttpException(
        'Document (Message) not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return message;
  }
}
