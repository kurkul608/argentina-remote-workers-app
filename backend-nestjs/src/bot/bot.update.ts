import { Ctx, InjectBot, Message, On, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { ChatsService } from '../chats/chats.service';
import { isPrivate } from './bot.utils';
import { CreateChatDto } from '../chats/create-chat.dto';

@Update()
export class BotUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly chatsService: ChatsService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    if (isPrivate(ctx.chat.type)) {
      await ctx.reply(
        'Привет, я работаю только в группах, а не в личных сообщениях',
      );
    } else {
      await ctx.reply('Hi');
    }
    return;
  }

  @On('new_chat_members')
  async newChatMember(
    @Message('new_chat_members')
    members: Array<{
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
    }>,
    @Ctx() ctx: Context,
  ) {
    const botName = process.env.TELEGRAM_API_NAME;
    if (isPrivate(ctx.chat.type)) {
      await ctx.reply(
        'Привет, я работаю только в группах, а не в личных сообщениях',
      );
      return;
    } else {
      if (members.find((member) => member.is_bot)) {
        const isItsMe = members.find((member) => member.username === botName);

        if (isItsMe) {
          await ctx.reply('Здарова удаленщики');
          const chat = await this.chatsService.findById(ctx.chat.id);
          if (!chat) {
            await this.chatsService.create(ctx.chat as CreateChatDto);
          }
          return;
        }
        const bot = members.find((member) => member.username !== botName);
        if (bot && !isPrivate(ctx.chat.type)) {
          await ctx.reply('Ботам здесь не рады');
          await ctx.banChatMember(bot.id, 2236063525);
          return;
        }
      }
    }
  }

  @On('left_chat_member')
  async leftChatMember(
    @Message('left_chat_member')
    member: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
    },
    @Ctx() ctx: Context,
  ) {
    const botName = process.env.TELEGRAM_API_NAME;
    if (member.is_bot && member.username === botName) {
      const chat = await this.chatsService.findById(ctx.chat.id);
      if (chat) {
        chat.remove();
        return;
      }
      return;
    }
  }
  @On('text')
  async messageHandler(@Message('text') msg: string, @Ctx() ctx: Context) {
    if (isPrivate(ctx.chat.type)) {
      await ctx.reply(
        'Привет, я работаю только в группах, а не в личных сообщениях',
      );
    }
    return;
  }
  @On('channel_post')
  async channelPostHandler(@Ctx() ctx: Context) {
    const chat = await this.chatsService.findById(ctx.chat.id);
    if (!chat) {
      await this.chatsService.create(ctx.chat as CreateChatDto);
    }
    return;
  }
  @On('edited_channel_post')
  async editChannelPostHandler(@Ctx() ctx: Context) {
    const chat = await this.chatsService.findById(ctx.chat.id);
    if (!chat) {
      await this.chatsService.create(ctx.chat as CreateChatDto);
    }
    return;
  }
}
