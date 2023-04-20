import { forwardRef, Module } from '@nestjs/common';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { ChatsModule } from '../chats/chats.module';
import { BotController } from './bot.controller';
import { UserModule } from '../users/user.module';
import { AuthModule } from '../auth/auth.module';
// import { TelegrafCustomModule } from '../telegraf-custom/telegraf-custom.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_API_KEY,
    }),
    // TelegrafCustomModule.forRoot({
    //   token: process.env.TELEGRAM_API_KEY,
    // }),
    forwardRef(() => ChatsModule),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
  ],
  controllers: [BotController],
  providers: [BotService, BotUpdate],
  exports: [BotService],
})
export class BotModule {}
