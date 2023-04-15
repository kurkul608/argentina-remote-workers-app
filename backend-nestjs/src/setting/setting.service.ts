import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Injectable()
export class SettingService {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}
  async getChatAdmins(chatId: number) {
    return await this.bot.telegram.getChatAdministrators(chatId);
  }
}
