import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { MessageDocument } from '../message/message.schema';
import { ChatsService } from '../chats/chats.service';
import { SetRestrictPermissionsDto } from '../setting/dto/set-restrict-permissions.dto';
import { SetAdminPermissionsDto } from '../setting/dto/set-admin-permissions.dto';

@Injectable()
export class BotService {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    @Inject(forwardRef(() => ChatsService))
    private readonly chatService: ChatsService,
  ) {}

  async sendMessage(
    chatId: number,
    message: MessageDocument,
    pinMessage: boolean,
  ) {
    // const t = Markup.inlineKeyboard([Markup.button.text('text')]);
    // const t = Markup.inlineKeyboard([Markup.button.callback()]);
    const messageText = message.quill_delta?.reduce(
      (acc, str) => `${acc}\r${str}`,
      '',
    );
    await this.bot.telegram.sendMessage(chatId, messageText).then((mes) => {
      if (pinMessage) {
        return this.bot.telegram.pinChatMessage(chatId, mes.message_id);
      }
    });
    // await this.bot.telegram
    //   .sendMessage(chatId, message, {
    //     parse_mode: 'HTML',
    //     protect_content: true,
    //     entities: [{ type: 'code', offset: 0, length: 1 }],
    //   })
    //   .then((m) => {
    //     if (pinMessage) {
    //       return this.bot.telegram.pinChatMessage(chatId, m.message_id);
    //     }
    //   });
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
  async getChatTGAdmins(chatId: string) {
    const chatInfo = await this.chatService.getChatById(chatId);
    return await this.bot.telegram.getChatAdministrators(chatInfo.id);
  }
  async promoteUserToAdmin(
    chatId: string,
    id: number,
    params: SetAdminPermissionsDto,
  ) {
    const chatInfo = await this.chatService.getChatById(chatId);
    return await this.bot.telegram.promoteChatMember(chatInfo.id, id, params);
  }
  async restrictAdminToUser(
    chatId: string,
    id: number,
    params: SetRestrictPermissionsDto,
  ) {
    const chatInfo = await this.chatService.getChatById(chatId);
    return await this.bot.telegram.restrictChatMember(chatInfo.id, id, params);
  }
}
