import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';
import { MessageDocument } from '../message/message.schema';
import { ButtonTypeEnum } from '../message/constants/button-type.enum';
import tt from 'typegram';

// type Hideable<B> = B & { hide?: boolean };
@Injectable()
export class BotService {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  async sendMessage(
    chatId: number,
    message: MessageDocument,
    pinMessage: boolean,
  ) {
    const buttonLinks: tt.InlineKeyboardButton[][] = [
      ...message.keyboard,
    ].reduce(
      (accRow: tt.InlineKeyboardButton[][], buttonRow) => [
        ...accRow,
        buttonRow.reduce(
          (accCell: tt.InlineKeyboardButton[], buttonCell) => [
            ...accCell,
            buttonCell.type === ButtonTypeEnum.link
              ? Markup.button.url(buttonCell.link.text, buttonCell.link.url)
              : Markup.button.callback(
                  buttonCell.hidden_text_button.button_text,
                  'data',
                ),
          ],
          [],
        ),
      ],
      [],
    );

    const messageText = message.quill_delta?.reduce(
      (acc, str) => `${acc}\n${str}`,
      '',
    );

    await this.bot.telegram
      .sendMessage(chatId, messageText, {
        disable_notification: message.notifications,
        ...Markup.inlineKeyboard(buttonLinks),
      })
      .then((mes) => {
        if (pinMessage) {
          return this.bot.telegram.pinChatMessage(chatId, mes.message_id);
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
