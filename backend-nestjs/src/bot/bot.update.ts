import { Ctx, InjectBot, Message, On, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { ChatsService } from '../chats/chats.service';
import { isPrivate } from './bot.utils';
import { CreateChatDto } from '../chats/create-chat.dto';
import { forwardRef, Inject } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { Public } from '../auth/public-route.decorator';
import { AuthService } from '../auth/auth.service';

@Update()
export class BotUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    @Inject(forwardRef(() => ChatsService))
    private readonly chatsService: ChatsService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  @Public()
  @Start()
  async startCommand(ctx: Context) {
    if (isPrivate(ctx.chat.type)) {
      const isOldUser = await this.userService.findById(ctx.from.id);
      if (!isOldUser) {
        await this.userService.create({
          ...ctx.from,
          language_code: ctx.from.language_code ?? 'en',
        });
      }
      await ctx.reply('Привет, можешь выбрть интересующую тебя функцию', {
        reply_markup: {
          keyboard: [[{ text: 'Получить токен' }]],
        },
      });
    } else {
      await ctx.reply('Hi');
    }
    return;
  }

  @Public()
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

  @Public()
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

  @Public()
  @On('message')
  async messageHandler(@Message('text') msg: string, @Ctx() ctx: Context) {
    if (isPrivate(ctx.chat.type)) {
      const { from } = ctx.message;
      if (msg === 'Получить токен') {
        const { access_token } = await this.authService.login(from);
        await ctx.reply(`Твой токен - ${access_token}`, {
          reply_markup: {
            keyboard: [[{ text: 'Получить токен' }]],
          },
        });
      }
    }
    return;
  }

  @Public()
  @On('channel_post')
  async channelPostHandler(@Ctx() ctx: Context) {
    const chat = await this.chatsService.findById(ctx.chat.id);
    if (!chat) {
      await this.chatsService.create(ctx.chat as CreateChatDto);
    }
    return;
  }

  @Public()
  @On('edited_channel_post')
  async editChannelPostHandler(@Ctx() ctx: Context) {
    const chat = await this.chatsService.findById(ctx.chat.id);
    if (!chat) {
      await this.chatsService.create(ctx.chat as CreateChatDto);
    }
    return;
  }
}
