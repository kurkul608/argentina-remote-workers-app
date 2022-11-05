import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}
  async sendMessage(chatId: number, message: string, pinMessage: boolean) {
    await this.bot.telegram.sendMessage(chatId, message).then((m) => {
      if (pinMessage) {
        this.bot.telegram.pinChatMessage(chatId, m.message_id);
      }
    });
    return;
  }
  async getChatInfoById(chatId: number) {
    const chatInfo = await this.bot.telegram.getChat(chatId);
    const chatMembersCount = await this.bot.telegram.getChatMembersCount(
      chatId,
    );
    // const ts = await this.bot.telegram.pho;
    return {
      chatInfo,
      chatMembersCount,
    };
  }
}
