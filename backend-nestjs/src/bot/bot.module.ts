import { Module } from '@nestjs/common';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { ChatsModule } from '../chats/chats.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_API_KEY,
    }),
    ChatsModule,
  ],
  controllers: [],
  providers: [BotService, BotUpdate],
  exports: [BotService],
})
export class BotModule {}
