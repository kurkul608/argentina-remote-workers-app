import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  async sendMessage(chatId: number, message: string, pinMessage: boolean) {
    await this.bot.telegram
      .sendMessage(chatId, message, {
        parse_mode: 'HTML',
        protect_content: true,
        entities: [{ type: 'code', offset: 0, length: 1 }],
      })
      .then((m) => {
        if (pinMessage) {
          return this.bot.telegram.pinChatMessage(chatId, m.message_id);
        }
      });
    return;
  }
  async getChatInfoById(chatId: number) {
    const chatInfo = await this.bot.telegram.getChat(chatId);
    return chatInfo;
  }
  async getChatMembersById(chatId: number) {
    const chatMembersCount = await this.bot.telegram.getChatMembersCount(
      chatId,
    );
    return chatMembersCount;
  }

  getBotName() {
    return process.env.TELEGRAM_API_NAME;
  }

  async getFileLink(filePath: string) {
    return await this.bot.telegram.getFileLink(filePath);
  }
  async getChatTGInfo(chatId: number) {
    const chatInfo = await this.getChatInfoById(chatId);
    const chatMembersCount = await this.getChatMembersById(chatId);
    const photos = chatInfo.photo;
    const photosLinks = {
      small: photos?.small_file_id
        ? await this.getFileLink(photos.small_file_id)
        : undefined,
      big: photos?.big_file_id
        ? await this.getFileLink(photos.big_file_id)
        : undefined,
    };
    return {
      chatInfo,
      chatMembersCount,
      photos: photosLinks,
    };
  }
}
