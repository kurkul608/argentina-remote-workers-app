import { Injectable } from '@nestjs/common';
import { BotService } from '../bot/bot.service';
import { SendMessageDto } from './send-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly botService: BotService) {}

  async sendMessages({ pin_message, message, chat_ids }: SendMessageDto) {
    for (const chatId of chat_ids) {
      await this.botService.sendMessage(chatId, message, pin_message);
    }
    return true;
  }
}
