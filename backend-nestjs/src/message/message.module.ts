import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { BotModule } from '../bot/bot.module';

@Module({
  imports: [BotModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
