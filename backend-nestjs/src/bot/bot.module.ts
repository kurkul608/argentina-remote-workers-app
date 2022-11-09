import { forwardRef, Module } from '@nestjs/common';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { ConfigModule } from '@nestjs/config';
import { ChatsModule } from '../chats/chats.module';

const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: process.env.TELEGRAM_API_KEY,
    }),
    forwardRef(() => ChatsModule),
  ],
  controllers: [],
  providers: [BotService, BotUpdate],
  exports: [BotService],
})
export class BotModule {}
